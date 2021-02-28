import JWT from 'jsonwebtoken'

import SmartApiController from './smart-api-controller'
import EventLogsModel, { IEventLogs } from '../../models/event-logs-model'
import UsersModel from '../../models/users-model'

import LIMIT from '../../configs/limits-config'
import { testEmail } from "../../utils/validate"
import { confirmEmailTemplate } from "../../templates/emails-templates"
import events from '../../utils/emitters'
import { randomKeyGenerator } from '../../utils/generators'

import APP from '../../configs/server-config'

export default class UsersApiController extends SmartApiController {
    constructor(request, response) {
        super(request, response)
    }

    async registrationWithEmail() {
        /* регистрация пользователя по email
         * data = { email, password }
         **/
        if (!this.request.dataMain?.body) return this.errorHandler('В доступе отказано')

        // TODO: если пользователь авторизован, повторную регистрацию не проводить
        console.log(this.request.dataMain)

        const data = this.request.dataMain.body

        // 1. Проверить анти-спам поле
        if (data?.antiSpam) return this.errorHandler('В доступе отказано')

        // 2. Проверить на корректность email
        if (!testEmail(data?.email)) return this.errorHandler('Введите корректный email')

        // 3. Проверить на существование email
        const getUserWithEmail = (email: string = '') => {
            return UsersModel.findOne({
                $or: [
                    { mainEmail: email },
                    { "emails.value": email }
                ]
            })
                .catch(error => events.emit('onError', 'Ошибка при запросе поиска пользователей по email: ', error))
        }

        if (await getUserWithEmail(data?.email)) return this.errorHandler('Указанный email уже зарегистрирован')

        // 4. Проверить количество попыток регистрации с IP за указанное время
        const getLastTryRegistration = (IP: string = '') => {
            return EventLogsModel.find({ eventName: 'Регистрация пользователя', requestIP: IP }).sort({ date: -1, _id: -1 }).limit(2)
                .catch(error => events.emit('onError', 'Ошибка при запросе попследней попытке регистрации: ', error))
        }
        const records: Array<IEventLogs> | boolean = await getLastTryRegistration(this.request.dataMain?.requestIP) // 2 записи последней регистрации по IP
        // console.log(records)

        if (Array.isArray(records) && records.length === 2) {
            // @ts-ignore
            const delta: number = new Date() - new Date(records[1].date)
            // console.log(delta, new Date(), new Date(records[1].date), delta / 1000 / 60)
            if ((delta / 1000 / 60) < LIMIT.limitTimeOfRegistration) return this.errorHandler('Перед повторной регистрацией должно пройти некоторое время')
        }

        // 5. Создать запись
        const hash: string = randomKeyGenerator() // хеш для подтверждения email

        const user = new UsersModel({
            mainEmail: data?.email,
            password: data?.password, // шифрование пароля происходит в моделе
            updatedAt: new Date(),
            hash,
            roles: [ 'temp-role' ]
        })

        let isSave: boolean = true
        user.save(error => {
            if (error) {
                events.emit('onError', 'Ошибка при сохранение данных пользователя: ', error)
                isSave = false
            }
        })

        if (!isSave) return this.errorHandler('Произошла ошибка во время регистрации')

        // 6. Выслать письмо для подтверждения email
        events.emit('sendMail', data?.email, 'Подтверждение адреса электронной почты', confirmEmailTemplate(hash), this.request)

        // 7. Логировать event
        this.request.dataMain.user = user
        events.emit('saveEventLogs', 'Регистрация пользователя', data?.email, this.request)

        // 8. Выслать ответ
        return this.response.status(200).send({ message: 'Регистрация прошла успешно', success: true, data: { email: data?.email } })
    }

    async loginWithEmail() {
        /* логин пользователя по email
         * data = { email, password }
         **/
        if (!this.request.dataMain?.body) return this.errorHandler('В доступе отказано')

        // TODO: если пользователь авторизован, повторную авторизацию не проводить
        console.log(this.request.dataMain)

        const data = this.request.dataMain.body

        // 1. Проверить анти-спам поле
        if (data?.antiSpam) return this.errorHandler('В доступе отказано')

        // 2. Проверить на существование email
        const getUserWithEmail = (email: string = '') => {
            return UsersModel.findOne({ mainEmail: email })
                .catch(error => events.emit('onError', 'Ошибка при запросе поиска пользователей по email: ', error))
        }

        const user = await getUserWithEmail(data?.email)
        if (!user) return this.errorHandler('Указанный email или пароль не совпадает')

        // 3. Проверить пароль
        // @ts-ignore
        const isLoginSuccess = user.comparePassword(data.password, (error, match) => {
            if (!match) return false
            if (error) {
                events.emit('onError', 'Ошибка при проверки пароля во время логина: ', error)
                return false
            }

            return true
        })

        if (!isLoginSuccess) return this.errorHandler('Указанный email или пароль не совпадает')

        // 4. Установить куки
        const date = new Date()
        date.setDate(date.getDate() + 30);

        const jwt = JWT.sign({
            // @ts-ignore
            email: user.mainEmail,
            // @ts-ignore
            id: user._id,
            exp: date.getTime()
        }, APP.secure.KEY_FOR_JWT)

        this.response.cookie('token', jwt,  {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            secure: APP.cookie.COOKIE_SECURE,
            httpOnly: true,
            signed: true,
            domain: APP.address.HOST,
            sameSite: "lax"
        })

        // 5. TODO: Выслать подтверждение на email
        console.log(this.request.dataMain)

        // 6. TODO: Логировать вход

        // 7. TODO: Вернуть ответ
        return this.response.status(200).send({ message: 'Вход в систему прошел успешно', success: true, data: user })
    }
}
