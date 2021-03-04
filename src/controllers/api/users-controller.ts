import JWT from 'jsonwebtoken'
import { Request, Response} from "express"

import SmartApiController from './smart-api-controller'
import EventLogsModel, { IEventLogs } from '../../models/event-logs-model'
import UsersModel, {IUsersModel} from '../../models/users-model'

import LIMIT from '../../configs/limits-config'
import { testEmail } from "../../utils/validate"
import events from '../../utils/emitters'
import { randomKeyGenerator } from '../../utils/generators'
import {
    serverSuccessMessage,
    serverErrorMessage,
    authErrorMessage,
    dataBaseErrorMessage,
    eventsName,
    emailSubjects,
    emailTemplates,
    authSuccessMessage
} from '../../utils/language'
import APP from '../../configs/server-config'

export default class UsersApiController extends SmartApiController {
    constructor(request: Request, response: Response) {
        super(request, response)
    }

    public async registrationWithEmail() { // регистрация пользователя по email
        /**
         * 1. если пользователь авторизован или запрос пуст,
         *    регистрацию не проводить
         */

        if (this.request.dataMain?.user?.mainEmail) return this.errorHandler(serverSuccessMessage.accessSuccess)
        if (!this.request.dataMain?.body) return this.errorHandler(serverErrorMessage.accessDenied)

        const data = this.request.dataMain.body
        const errors: string[] = []

        // =================

        /**
         * 2. Проверить анти-спам поле
         */

        if (data?.antiSpam) return this.errorHandler(serverErrorMessage.accessDenied)

        // =================

        /**
         * 3. Проверить на корректность email
         */

        if (!testEmail(data?.email)) return this.errorHandler(authErrorMessage.emailIsWrong)

        // =================

        /**
         * 4. Проверить на существование email
         */

        const getUserWithEmail = (email: string = '') => {
            return UsersModel.findOne({
                $or: [
                    { mainEmail: email },
                    { "emails.value": email }
                ]
            })
                .catch(error => {
                    events.emit('onError', dataBaseErrorMessage.searchForUsersByEmail, error)
                    errors.push(error)
                    return false
                })
        }

        if (await getUserWithEmail(data?.email)) return this.errorHandler(authErrorMessage.emailExists)

        // =================

        /**
         * 5. Проверить количество попыток регистрации с IP за указанное время
         */

        const getLastTryRegistration = (IP: string = '') => {
            return EventLogsModel
                .find({ eventName: eventsName.registryUser, requestIP: IP })
                    .sort({ date: -1, _id: -1 })
                        .limit(2)
                            .catch(error => {
                                events.emit('onError', dataBaseErrorMessage.lastTryRegistry, error)
                                errors.push(error)
                                return false
                            })
        }
        const records: Array<IEventLogs> | boolean = await getLastTryRegistration(this.request.dataMain?.requestIP) // 2 записи последней регистрации по IP

        if (Array.isArray(records) && records.length === 2) {
            // @ts-ignore
            const delta: number = new Date() - new Date(records[1].date)
            if ((delta / 1000 / 60) < LIMIT.limitTimeOfRegistration) return this.errorHandler(authErrorMessage.lastTryQuery)
        }

        // =================

        /**
         * 6. Создать запись и проверить на ошибки предыдущие действия
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
                events.emit('onError', dataBaseErrorMessage.createUser, error)
                errors.push(error)
                return false
            })

        if (errors.length) return this.errorHandler(authErrorMessage.onPrepare + ' ' + errors.join(', '))

        // =================

        /**
         * 7. Выслать письмо для подтверждения email
         */

        events.emit('sendMail', data?.email, emailSubjects.confirmEmail, emailTemplates.confirmEmailTemplate(hash), this.request)

        // =================

        /**
         * 8. Логировать event
         */

        this.request.dataMain.user = user
        events.emit('saveEventLogs', eventsName.registryUser, data?.email, this.request)

        // =================

        /**
         * 9. Выслать ответ
         */

        return this.response.status(200).send({ message: authSuccessMessage.registry, success: true, data: { email: data?.email } })

        // =================
    }

    public async loginWithEmail() { // логин пользователя по email
        /**
         * 1. если пользователь авторизован или запрос пуст,
         *    повторную авторизацию не проводить
         */

        if (this.request.dataMain?.user?.mainEmail) return this.errorHandler(authSuccessMessage.auth)
        if (!this.request.dataMain?.body) return this.errorHandler(serverErrorMessage.accessDenied)

        const data = this.request.dataMain.body

        // =================

        /**
         * 2. Проверить анти-спам поле
         */

        if (data?.antiSpam) return this.errorHandler(serverErrorMessage.accessDenied)

        // =================

        /**
         * 3. Проверить на существование email
         */

        const getUserWithEmail = (email: string = '') => {
            return UsersModel.findOne({ mainEmail: email })
                .catch(error => events.emit('onError', dataBaseErrorMessage.searchForUsersByEmail, error))
        }

        const user = await getUserWithEmail(data?.email) as IUsersModel
        if (!user) return this.errorHandler(authErrorMessage.passwordOrEmailIsWrong)

        // =================

        /**
         * 4. Проверить пароль
         */

        const isLoginSuccess = (<IUsersModel>user).comparePassword(data?.password, (error, match) => {
            if (!match) return false
            if (error) {
                events.emit('onError', dataBaseErrorMessage.checkingPassDuringLogin, error)
                return false
            }

            return true
        })

        if (!isLoginSuccess) return this.errorHandler(authErrorMessage.passwordOrEmailIsWrong)

        // =================

        /**
         * 5. Записать полученного пользователя в request
         */

        this.request.dataMain.user = user

        // =================

        /**
         * 6. Установить куки
         */

        const date = new Date()
        date.setDate(date.getDate() + 30) // 30 days

        const jwt = JWT.sign({
            email: user.mainEmail,
            id: user._id,
            exp: date.getTime()
        }, APP.secure.KEY_FOR_JWT)

        this.response.cookie('token', jwt,  {
            maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
            secure: APP.cookie.COOKIE_SECURE,
            httpOnly: true,
            signed: true,
            domain: APP.address.HOST,
            sameSite: "lax"
        })

        // =================

        /**
         * 7. Выслать подтверждение на email
         */

        events.emit('sendMail', user.mainEmail, emailSubjects.accountLogin, emailTemplates.accountLogin(), this.request)

        // =================

        /**
         * 8. Логировать вход
         */

        events.emit('saveEventLogs', eventsName.login, user.mainEmail, this.request)

        // =================

        /**
         * 9. Вернуть ответ
         */

        return this.response.status(200).send({ message: authSuccessMessage.auth, success: true, data: user })

        // =================
    }

    public async sendEmailForRestorePath() { // высылаем письмо с сылкой для востановления пароля
        /**
         * 1. если пользователь авторизован или запрос пуст,
         *    востановление не проводим
         */

        const email: string = this.request.params?.email

        if (this.request.dataMain?.user?.mainEmail) return this.errorHandler(authSuccessMessage.auth)
        if (!email) return this.errorHandler(serverErrorMessage.accessDenied)

        // =================

        /**
         * 2. Проверяем email на существование
         */

        const getUserWithEmail = (email: string = '') => {
            return UsersModel.findOne({ mainEmail: email })
                .catch(error => events.emit('onError', dataBaseErrorMessage.searchForUsersByEmail, error))
        }

        const user = await getUserWithEmail(email) as IUsersModel
        if (!user) return this.errorHandler(authErrorMessage.emailNotExists)

        // =================

        /**
         * 3. Проверяем лимиты(по IP и email) на запросы по востановлению пароля
         */

        const errors: string[] = []

        const getLastTryRestorePass = (IP: string = '') => {
            return EventLogsModel
                .find({ eventName: eventsName.restorePassword, $or: [ { requestIP: IP }, { text: user.mainEmail } ] })
                    .sort({ date: -1, _id: -1 })
                        .limit(2)
                            .catch(error => {
                                events.emit('onError', dataBaseErrorMessage.lastTryRestorePass, error)
                                errors.push(error)
                                return false
                            })
        }
        const records: Array<IEventLogs> | boolean = await getLastTryRestorePass(this.request.dataMain?.requestIP) // 2 записи последней регистрации по IP

        if (Array.isArray(records) && records.length === 2) {
            // @ts-ignore
            const delta: number = new Date() - new Date(records[1].date)
            if ((delta / 1000 / 60) < LIMIT.limitTimeOfRestorePassword) return this.errorHandler(authErrorMessage.lastTryQuery)
        }

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
                events.emit('onError', dataBaseErrorMessage.createUser, error)
                errors.push(error)
                return false
            })


        if (errors.length) return this.errorHandler(authErrorMessage.onPrepare + ' ' + errors.join(', '))

        // =================

        /**
         * 5. Высылаем письмо
         */

        events.emit('sendMail', user.mainEmail, emailSubjects.restorePassword, emailTemplates.restorePassword(hash), this.request)

        // =================

        /**
         * 6. Логируем событие
         */

        events.emit('saveEventLogs', eventsName.restorePassword, user.mainEmail, this.request)

        // =================

        /**
         * 7. Возвращаем ответ
         */

        return this.response.status(200).send({ message: authSuccessMessage.restorePassword, success: true, data: { email: user.mainEmail } })

        // =================
    }

    public async changePassWithHash() { // Меняем пароль пользователя по хешу
        /**
         * 1. если пользователь авторизован или запрос пуст,
         *    пароль не менять
         */

        if (this.request.dataMain?.user?.mainEmail) return this.errorHandler(serverSuccessMessage.accessSuccess)
        if (!this.request.dataMain?.body) return this.errorHandler(serverErrorMessage.accessDenied)

        const data = this.request.dataMain.body
        const errors: string[] = []

        // =================

        /**
         * 2. Проверить анти-спам поле
         */

        if (data?.antiSpam) return this.errorHandler(serverErrorMessage.accessDenied)

        // =================

        /**
         * 3. Поиск пользователя по хеш
         */

        const getUserWithHash = (hash: string = '') => {
            return UsersModel.findOne({ hash })
                .catch(error => events.emit('onError', dataBaseErrorMessage.searchForUsersByHash, error))
        }

        const user = await getUserWithHash(data?.hash) as IUsersModel
        if (!user) return this.errorHandler(authErrorMessage.hashIsWrong)

        // =================

        /**
         * 4. Проверяем лимиты(по IP и hash) на запросы по смене пароля
         */

        const getLastTryChangePass = (IP: string = '', hash: string = '') => {
            return EventLogsModel
                .find({ eventName: eventsName.changePassword, $or: [ { requestIP: IP }, { text: hash } ] })
                    .sort({ date: -1, _id: -1 })
                        .limit(2)
                            .catch(error => {
                                events.emit('onError', dataBaseErrorMessage.lastTryChangePass, error)
                                errors.push(error)
                                return false
                            })
        }
        const records: Array<IEventLogs> | boolean = await getLastTryChangePass(this.request.dataMain?.requestIP, data?.hash) // 2 записи последней регистрации по IP

        if (Array.isArray(records) && records.length === 2) {
            // @ts-ignore
            const delta: number = new Date() - new Date(records[1].date)
            if ((delta / 1000 / 60) < LIMIT.limitTimeOfChangePassword) return this.errorHandler(authErrorMessage.lastTryQuery)
        }

        // =================

        /**
         * 5. Смена пароля
         */

        user.password = data?.password || ''
        user.updatedAt = new Date()

        await new UsersModel(user)
            .save()
                .catch(error => {
                    events.emit('onError', dataBaseErrorMessage.createUser, error)
                    errors.push(error)
                    return false
                })

        if (errors.length) return this.errorHandler(authErrorMessage.onPrepare + ' ' + errors.join(', '))

        // =================

        /**
         * 6. Логируем событие
         */

        events.emit('saveEventLogs', eventsName.changePassword, user.mainEmail, this.request)

        // =================

        /**
         * 7. Отрисовать ответ
         */

        return this.response.status(200).send({ message: authSuccessMessage.changePassword, success: true, data: { } })

        // =================
    }
}
