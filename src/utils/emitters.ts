import { Request } from "express"
import EventEmitter from 'events'
import Mongoose from "mongoose"

import mailer from './mailer'
import ModelErrorLogs from '../models/error-logs-model'
import ModelEventLogs from '../models/event-logs-model'

import Lang from "../dictionary/language"
import Config from "../configs/server-config"

const L = new Lang(Config.LANG)

// Создаем экземпляр слушателя событий
class Emitter extends EventEmitter {}
const events = new Emitter()

// mail
const sendMail = (to: string, subject: string, html: string, request: Request): void => {
    mailer(to, subject, html)
        .then(() => {
            events.emit('saveEventLogs', L.translate('Отправки письма'), `to: ${to}, subject: ${subject}, html: ${html}`, request)
        })
            .catch(error => events.emit('onError', L.translate('Ошибка при отправке email получателю {{email}}', { email: to }), error))
}

// log error
const logError = (textDescription: string, textError: string): void => {
    new ModelErrorLogs({ textDescription, textError }).save(error => {
        if (error) console.error(L.translate('Ошибка при попытке сохранить в БД лог ошибки:'), error)
    })

    console.error('⚡️[server]:', textDescription, textError)
}

// log events
const logEvents = (eventName: string, text: string, request: Request): void => {
    new ModelEventLogs({
        date: new Date(),
        eventName,
        text,
        requestIP: request?.dataMain?.requestIP || '',
        user: Mongoose.Types.ObjectId(request?.dataMain?.user?._id || 0)
    }).save(error => {
        if (error) events.emit('onError', L.translate('Ошибка во время сохранения лога события:'), error)
    })
}

// listeners
events.on('sendMail', sendMail) // Связываем слушатель событий и функцию
events.on('onError', logError)
events.on('saveEventLogs', logEvents)

export default events

