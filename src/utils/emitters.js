import EventEmitter from 'events'
import Mongoose from "mongoose";
import mailer from './mailer.js'
import ModelErrorLogs from '../models/error-logs-model.js'
import ModelEventLogs from '../models/event-logs-model.js'

// Создаем экземпляр слушателя событий
class Emitter extends EventEmitter {}
const events = new Emitter()

// mail
const sendMail = (to, subject, html, request) => {
    // console.log(`to: ${to}, subject: ${subject}, html: ${html}`)

    mailer(to, subject, html)
        .then(() => {
            events.emit('saveEventLogs', 'Отправки письма', `to: ${to}, subject: ${subject}, html: ${html}`, request)
        })
            .catch(error => events.emit('onError', `Ошибка при отправке email получателю ${to}: `, error))
}

// log error
const logError = (textDescription, textError) => {
    new ModelErrorLogs({ textDescription, textError }).save(error => {
        if (error) console.error(error)
    })
    console.error(textDescription, textError)
}

// log events
const logEvents = (eventName, text, request) => {
    // console.log('dm', request)
    new ModelEventLogs({
        eventName,
        text,
        requestIP: request?.dataMain?.requestIP || '',
        user: Mongoose.Types.ObjectId(request?.dataMain?.user?._id || 0)
    }).save(error => {
        if (error) events.emit('onError', 'Ошибка во время сохранения лога события: ', error)
    })
}

// listeners
events.on('sendMail', sendMail) // Связываем слушатель событий и функцию
events.on('onError', logError)
events.on('saveEventLogs', logEvents)

export default events

