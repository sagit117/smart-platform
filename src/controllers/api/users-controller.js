import SmartApiController from './smart-api-controller.js'
import RequestLogsModel from '../../models/request-log-model.js'
import EventLogsModel from '../../models/event-logs-model.js'
import UsersModel from '../../models/users-model.js'

import LIMIT from '../../configs/limits-config.js'
import { testEmail } from "../../utils/validate.js";
import { confirmEmailTemplate } from "../../templates/emails-templates.js";

import events from '../../utils/emitters.js'

export default class UsersApiController extends SmartApiController {
    constructor(request, response) {
        super(request, response)
    }

    async registrationWithEmail() {
        /* регистрация пользователя по email
         * data = { email, password }
         **/

        const data = this.request.dataMain.body

        // 1. Проверить анти-спам поле
        if (data.antiSpam) return this.errorHandler('В доступе отказано')

        // 2. Проверить на корректность email
        if (!testEmail(data.email)) return this.errorHandler('Введите корректный email')

        // 3. Проверить на существование email
        const getUserWithEmail = email => {
            return UsersModel.findOne({
                $or: [
                    { mainEmail: email },
                    { "emails.value": email }
                ]
            })
                .catch(error => events.emit('onError', 'Ошибка при запросе поиска пользователей по email: ', error))
        }

        if (await getUserWithEmail(data.email)) return this.errorHandler('Указанный email уже зарегистрирован')

        // 4. Проверить количество попыток регистрации с IP за указанное время
        const getLastTryRegistration = IP => {
            return EventLogsModel.find({ eventName: 'Регистрация пользователя', requestIP: IP }).sort({ date: 'desc', _id: -1 }).limit(2)
                .catch(error => events.emit('onError', 'Ошибка при запросе попследней попытке регистрации: ', error))
        }
        const records = await getLastTryRegistration(this.request.dataMain.requestIP) || [] // 2 записи последней регистрации по IP

        if (records.length === 2) {
            const delta = new Date() - new Date(records[1].date)
            // console.log(delta, new Date(), new Date(records[1].date))
            if ((delta / 1000 / 60) < LIMIT.limitTimeOfRegistration) return this.errorHandler('Перед повторной регистрацией должно пройти некоторое время')
        }

        // 5. Создать запись
        const user = new UsersModel({
            mainEmail: data.email,
            password: data.password,
            updatedAt: new Date()
        })
        user.save(error => {
            if (error) events.emit('onError', 'Ошибка при сохранение данных пользователя: ', error)
        })

        // 6. Выслать письмо для подтверждения email
        events.emit('sendMail', data.email, 'Подтверждение адреса электронной почты', confirmEmailTemplate(), this.request)

        // 7. Логировать event
        this.request.dataMain.user = user
        events.emit('saveEventLogs', 'Регистрация пользователя', data.email, this.request)

        // 8. Выслать ответ
        return this.response.status(200).send({ message: 'Регистрация прошла успешно', success: true, data: { email: data.email } })
    }
}
