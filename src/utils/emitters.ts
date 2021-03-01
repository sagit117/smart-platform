import { Request } from "express"
import EventEmitter from 'events'
import Mongoose from "mongoose";
import mailer from './mailer'
import ModelErrorLogs from '../models/error-logs-model'
import ModelEventLogs from '../models/event-logs-model'

import APP from '../configs/server-config'
import { setDictionary } from '../dictionary/connect-dictionary' // словарь переводов

const Lang = setDictionary(APP.LANG)
const serverSuccessMessage = Lang.getServerSuccessMessage()
const dataBaseErrorMessage = Lang.getDataBaseErrorMessage()
const eventsName = Lang.getEventsName()
const serverErrorMessage = Lang.getServerErrorMessage()
const authErrorMessage = Lang.getAuthErrorMessage()
const authSuccessMessage = Lang.getAuthSuccessMessage()
const emailSubjects = Lang.getEmailSubjects()
const emailTemplates = Lang.getEmailTemplates()
const errorsMessage = Lang.getErrorMessage()

// Создаем экземпляр слушателя событий
class Emitter extends EventEmitter {}
const events = new Emitter()

// mail
const sendMail = (to: string, subject: string, html: string, request: Request): void => {
    // console.log(`to: ${to}, subject: ${subject}, html: ${html}`)

    mailer(to, subject, html)
        .then(() => {
            events.emit('saveEventLogs', eventsName.sendEmail, `to: ${to}, subject: ${subject}, html: ${html}`, request)
        })
            .catch(error => events.emit('onError', errorsMessage.sendEmail(to), error))
}

// log error
const logError = (textDescription: string, textError: string): void => {
    new ModelErrorLogs({ textDescription, textError }).save(error => {
        if (error) console.error(dataBaseErrorMessage.createErrorsLog, error)
    })

    console.error('⚡️[server]:', textDescription, textError)
}

// log events
const logEvents = (eventName: string, text: string, request: Request): void => {
    // console.log('dm', request)
    new ModelEventLogs({
        eventName,
        text,
        requestIP: request?.dataMain?.requestIP || '',
        user: Mongoose.Types.ObjectId(request?.dataMain?.user?._id || 0)
    }).save(error => {
        if (error) events.emit('onError', dataBaseErrorMessage.createErrorsLog, error)
    })
}

// listeners
events.on('sendMail', sendMail) // Связываем слушатель событий и функцию
events.on('onError', logError)
events.on('saveEventLogs', logEvents)

export default events

