import JWT from 'jsonwebtoken'
import { Request, Response} from "express"

import SmartApiController from './smart-api-controller'
import EventLogsModel, { IEventLogs } from '../../models/event-logs-model'
import UsersModel, { IUsersModel } from '../../models/users-model'

import LIMIT from '../../configs/limits-config'
import { testEmail } from "../../utils/validate"
import events from '../../utils/emitters'
import { randomKeyGenerator } from '../../utils/generators'

import Lang from "../../dictionary/language"
import Config from "../../configs/server-config"

const L = new Lang(Config.LANG)

export default class UsersApiController extends SmartApiController {
    constructor(request: Request, response: Response) {
        super(request, response)
    }

    protected _userIsLoggedOrEmptyData(): string {
        if (this.request.dataMain?.user?.mainEmail) return L.translate('Пользователь авторизован!')
        if (!this.request.dataMain?.body) return L.translate('В доступе отказано')
        if (this.request.dataMain?.body.antiSpam) return L.translate('В доступе отказано')

        return ''
    }

    protected  _checkLimits(records: Array<IUsersModel | IEventLogs> | boolean): string {
        if (Array.isArray(records) && records.length === 2) {
            // @ts-ignore
            const delta: number = new Date() - new Date(records[1].date)
            if ((delta / 1000 / 60) < LIMIT.limitTimeOfRegistration) return L.translate('Перед повторным запросом должно пройти некоторое время!')
        }

        return ''
    }

    public async registrationWithEmail() { // регистрация пользователя по email
        /**
         * 1. если пользователь авторизован или запрос пуст,
         *    регистрацию не проводить
         */

        const errorMsg = this._userIsLoggedOrEmptyData()
        if (errorMsg) return this.errorHandler(errorMsg)

        const data = this.request.dataMain?.body
        const errors: string[] = []

        // =================

        /**
         * 2. Проверить на существование email
         */

        if (!testEmail(data?.email)) return this.errorHandler(L.translate('Введите корректный email!'))
        if (await UsersModel.findUserByEmail(data?.email)) return this.errorHandler(L.translate('Указанный email уже зарегистрирован!'))

        // =================

        /**
         * 3. Проверить количество попыток регистрации с IP за указанное время
         */

        const getLastTryRegistration = (IP: string = '') => {
            return EventLogsModel
                .find({ eventName: L.translate('Регистрация пользователя'), requestIP: IP })
                    .sort({ date: -1, _id: -1 })
                        .limit(2)
                            .catch(error => {
                                events.emit('onError', L.translate('Ошибка при запросе попследней попытке регистрации:'), error)
                                errors.push(error)
                                return false
                            })
        }
        const records: Array<IEventLogs> | boolean = await getLastTryRegistration(this.request.dataMain?.requestIP) // 2 записи последней регистрации по IP

        const errorMessage = this._checkLimits(records)
        if (errorMessage) return this.errorHandler(errorMessage)
        // =================

        /**
         * 4. Создать запись и проверить на ошибки предыдущие действия
         */

        const hash: string = randomKeyGenerator() // хеш для подтверждения email

        const user = new UsersModel({
            mainEmail: data?.email,
            password: data?.password, // шифрование пароля происходит в моделе
            updatedAt: new Date(),
            hash,
            roles: [ 'temp-role' ]
        })

        await user.save()
            .catch(error => {
                events.emit('onError', L.translate('Ошибка при сохранение данных пользователя:'), error)
                errors.push(error)
                return false
            })

        if (errors.length) return this.errorHandler(L.translate('Произошла ошибка во время выполнения операции!') + ' ' + errors.join(', '))

        // =================

        /**
         * 5. Выслать письмо для подтверждения email
         */

        events.emit('sendMail', data?.email, L.translate('Подтверждение адреса электронной почты'), L.translate('confirmEmailTemplate', { hash }), this.request)

        // =================

        /**
         * 6. Логировать event
         */

        // @ts-ignore
        this.request.dataMain.user = user
        events.emit('saveEventLogs', L.translate('Регистрация пользователя'), data?.email, this.request)

        // =================

        /**
         * 7. Выслать ответ
         */

        return this.response.status(200).send({ message: L.translate('Регистрация прошла успешно!'), success: true, data: { email: data?.email } })

        // =================
    }

    public async loginWithEmail() { // логин пользователя по email
        /**
         * 1. если пользователь авторизован или запрос пуст,
         *    повторную авторизацию не проводить
         */

        const errorMsg = this._userIsLoggedOrEmptyData()
        if (errorMsg) return this.errorHandler(errorMsg)

        const data = this.request.dataMain?.body

        // =================

        /**
         * 2. Проверить на существование email
         */

        const user = await UsersModel.findUserByMainEmail(data?.email)
        if (!(user instanceof UsersModel)) return this.errorHandler(L.translate('Указанный email или пароль не совпадает!'))

        // =================

        /**
         * 3. Проверить пароль
         */

        const isLoginSuccess: boolean = user.comparePassword(data?.password, (error, match) => {
            if (!match) return false
            if (error) {
                events.emit('onError', L.translate('Ошибка при проверки пароля во время логина:'), error)
                return false
            }

            return true
        })

        if (!isLoginSuccess) return this.errorHandler(L.translate('Указанный email или пароль не совпадает!'))

        // =================

        /**
         * 4. Записать полученного пользователя в request
         */

        // @ts-ignore
        this.request.dataMain.user = user

        // =================

        /**
         * 5. Установить куки
         */

        const date = new Date()
        date.setDate(date.getDate() + 30) // 30 days

        const jwt = JWT.sign({
            email: user.mainEmail,
            id: user._id,
            exp: date.getTime()
        }, Config.secure.KEY_FOR_JWT)

        this.response.cookie('token', jwt,  {
            maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
            secure: Config.cookie.COOKIE_SECURE,
            httpOnly: true,
            signed: true,
            domain: Config.address.HOST,
            sameSite: "lax"
        })

        // =================

        /**
         * 6. Выслать подтверждение на email
         */

        events.emit('sendMail', user.mainEmail, L.translate('Вход в систему'), L.translate('accountLogin'), this.request)

        // =================

        /**
         * 7. Логировать вход
         */

        events.emit('saveEventLogs', L.translate('Пользователь вошел в систему'), user.mainEmail, this.request)

        // =================

        /**
         * 8. Вернуть ответ
         */

        return this.response.status(200).send({ message: L.translate('Пользователь авторизован успешно!'), success: true, data: user })

        // =================
    }

    public async sendEmailForRestorePath() { // высылаем письмо с сылкой для востановления пароля
        /**
         * 1. если пользователь авторизован или запрос пуст,
         *    востановление не проводим
         */

        const email: string = this.request.params?.email

        const errorMsg = this._userIsLoggedOrEmptyData()
        if (errorMsg) return this.errorHandler(errorMsg)

        // =================

        /**
         * 2. Проверяем email на существование
         */

        const user = await UsersModel.findUserByMainEmail(email)
        if (!(user instanceof UsersModel)) return this.errorHandler(L.translate('Указанный email не существует'))

        // =================

        /**
         * 3. Проверяем лимиты(по IP и email) на запросы по востановлению пароля
         */

        const errors: string[] = []

        const getLastTryRestorePass = (IP: string = '') => {
            return EventLogsModel
                .find({ eventName: L.translate('Запрос сброса пароля'), $or: [ { requestIP: IP }, { text: user.mainEmail } ] })
                    .sort({ date: -1, _id: -1 })
                        .limit(2)
                            .catch(error => {
                                events.emit('onError', L.translate('Ошибка при запросе попследней попытке восстановить пароль:'), error)
                                errors.push(error)
                                return false
                            })
        }
        const records: Array<IEventLogs> | boolean = await getLastTryRestorePass(this.request.dataMain?.requestIP) // 2 записи последней регистрации по IP

        const errorMessage = this._checkLimits(records)
        if (errorMessage) return this.errorHandler(errorMessage)

        // =================

        /**
         * 4. Сгенерировать и сохранить хеш для востановления
         */

        const hash: string = randomKeyGenerator() // хеш для подтверждения email

        await UsersModel.updateOne({
            mainEmail: user.mainEmail,
        }, {
            hash,
            updatedAt: new Date()
        })
            .catch(error => {
                events.emit('onError', L.translate('Ошибка при сохранение данных пользователя:'), error)
                errors.push(error)
                return false
            })


        if (errors.length) return this.errorHandler(L.translate('Произошла ошибка во время выполнения операции!') + ' ' + errors.join(', '))

        // =================

        /**
         * 5. Высылаем письмо
         */

        events.emit('sendMail', user.mainEmail, L.translate('Восстановление пароля'), L.translate('restorePassword', { hash }), this.request)

        // =================

        /**
         * 6. Логируем событие
         */

        events.emit('saveEventLogs', L.translate('Запрос сброса пароля'), user.mainEmail, this.request)

        // =================

        /**
         * 7. Возвращаем ответ
         */

        return this.response.status(200).send({ message: L.translate('Запрос на восстановление доступа обработан'), success: true, data: { email: user.mainEmail } })

        // =================
    }

    public async changePassWithHash() { // Меняем пароль пользователя по хешу
        /**
         * 1. если пользователь авторизован или запрос пуст,
         *    пароль не менять
         */

        const errorMsg = this._userIsLoggedOrEmptyData()
        if (errorMsg) return this.errorHandler(errorMsg)

        const data = this.request.dataMain?.body
        const errors: string[] = []

        // =================

        /**
         * 3. Поиск пользователя по хеш
         */

        const user = await UsersModel.findUserByHash(data?.hash)
        if (!(user instanceof UsersModel)) return this.errorHandler(L.translate('Хэш-код не действителен'))

        // =================

        /**
         * 4. Проверяем лимиты(по IP и hash) на запросы по смене пароля
         */

        const getLastTryChangePass = (IP: string = '', hash: string = '') => {
            return EventLogsModel
                .find({ eventName: L.translate('Смена пароля'), $or: [ { requestIP: IP }, { text: hash } ] })
                    .sort({ date: -1, _id: -1 })
                        .limit(2)
                            .catch(error => {
                                events.emit('onError', L.translate('Ошибка при запросе попследней попытке изменить пароль:'), error)
                                errors.push(error)
                                return false
                            })
        }
        const records: Array<IEventLogs> | boolean = await getLastTryChangePass(this.request.dataMain?.requestIP, data?.hash) // 2 записи последней регистрации по IP

        const errorMessage = this._checkLimits(records)
        if (errorMessage) return this.errorHandler(errorMessage)

        // =================

        /**
         * 5. Смена пароля
         */

        user.password = data?.password || ''
        user.updatedAt = new Date()

        await new UsersModel(user)
            .save()
                .catch(error => {
                    events.emit('onError', L.translate('Ошибка при сохранение данных пользователя:'), error)
                    errors.push(error)
                    return false
                })

        if (errors.length) return this.errorHandler(L.translate('Произошла ошибка во время выполнения операции!') + ' ' + errors.join(', '))

        // =================

        /**
         * 6. Логируем событие
         */

        events.emit('saveEventLogs', L.translate('Смена пароля'), user.mainEmail, this.request)

        // =================

        /**
         * 7. Отрисовать ответ
         */

        return this.response.status(200).send({ message: L.translate('Пароль изменен'), success: true, data: { } })

        // =================
    }
}
