import APP from "../configs/server-config";

export default class Ru {
    private _errorMessage = {
        server: {
            notAllowedCORS: '⚡️[server]: Запрещено настройками CORS',
            notFound: '⚡️[server]: Ресурс не найден',
            accessDenied: '⚡️[server]: В доступе отказано',
        },
        dataBase: {
            createRoute: '⚡️[DB]: Ошибка при создание записи маршрута: ',
            connectionOn: '⚡️[DB]: Ошибка подключения к mongodb: ',
            createRequestLog: '⚡️[DB]: Ошибка при сохранение данных в лог подключения: ',
            lastTryRegistry: '⚡️[DB]: Ошибка при запросе попследней попытке регистрации: ',
            lastTryRestorePass: '⚡️[DB]: Ошибка при запросе попследней попытке восстановить пароль: ',
            lastTryChangePass: '⚡️[DB]: Ошибка при запросе попследней попытке изменить пароль: ',
            createUser: '⚡️[DB]: Ошибка при сохранение данных пользователя: ',
            searchForUsersByEmail: '⚡️[DB]: Ошибка при запросе поиска пользователей по email: ',
            checkingPassDuringLogin: '⚡️[DB]: Ошибка при проверки пароля во время логина: ',
            changeRoleUser: '⚡️[DB]: Ошибка при попытке сменить роль пользователя: ',
            confirmEmail: '⚡️[DB]: Ошибка при попытке подтвердить email: ',
            createErrorsLog: '⚡️[DB]: Ошибка при попытке сохранить в БД лог ошибки: ',
            createEventsLog: '⚡️[DB]: Ошибка во время сохранения лога события: ',
            searchForUsersByHash: '⚡️[DB]: Ошибка при запросе поиска пользователей по хеш-коду: '
        },
        auth: {
            emailExists: 'Указанный email уже зарегистрирован!',
            emailNotExists: 'Указанный email не существует',
            emailIsWrong: 'Введите корректный email!',
            lastTryQuery: 'Перед повторным запросом должно пройти некоторое время!',
            onPrepare: 'Произошла ошибка во время выполнения операции!',
            passwordOrEmailIsWrong: 'Указанный email или пароль не совпадает!',
            hashIsWrong: 'Хэш-код не действителен'
        },
        errors: {
            sendEmail(to: string): string {
                return `Ошибка при отправке email получателю ${to}: `
            }
        }
}

    private _successMessage = {
        server: {
            serverIsRunning: `⚡️[server]: Сервер запущен на ${APP.address.HOST}:${APP.address.PORT}`,
            serverIsWaiting: `⚡️[server]: Сервер ожидает подключения...`,
            accessSuccess: '⚡️[server]: Пользователь авторизован!'
        },
        dataBase: {
            createRoute: '⚡️[DB]: Создана запись маршрута: ',
            connectionOn: '⚡️[DB]: Соединение с mongodb установлено',
        },
        auth: {
            registry: 'Регистрация прошла успешно!',
            auth: 'Пользователь авторизован!',
            restorePassword: 'Запрос на восстановление доступа обработан',
            changePassword: 'Пароль изменен',
        }
    }

    private _eventsName = {
        registryUser: 'Регистрация пользователя',
        sendEmail: 'Отправки письма',
        login: 'Пользователь вошел в систему',
        restorePassword: 'Запрос сброса пароля',
        changePassword: 'Смена пароля',
    }

    private _emailSubjects = {
        confirmEmail: 'Подтверждение адреса электронной почты',
        accountLogin: 'Вход в систему',
        restorePassword: 'Восстановление пароля'
    }

    private _routeTitles = {
        configurator: 'Конфигуратор',
        confirmEmail: 'Подтверждение email'
    }

    private _emailTemplates = {
        confirmEmailTemplate(hash: string = ''): string {
            if (!hash) return ``

            return `
                <h3> Здравствуйте! </h3>
                <p> 
                    Для подтверждения регистрации на сайте www.${APP.address.HOST}, перейдите по 
                    <b>
                        <a 
                            href="${APP.address.PROTOCOL}://${APP.address.HOST}${APP.address.PORT
                                ? ':' + APP.address.PORT
                                : ''}/confirm_email/${hash}">
                                ссылке
                       </a>
                    </b>. 
                </p>
                <p> Если Вы не регистрировались на сайте www.${APP.address.HOST}, просто проигнорируйте данное письмо.</p>
            `
        },
        accountLogin(): string {
            return `
                <h3> Здравствуйте! Вы вошли в аккаунт на сайте www.${APP.address.HOST}</h3>
                
                <p> 
                    Если это были не Вы, 
                    <b>
                        <a 
                            href="${APP.address.PROTOCOL}://${APP.address.HOST}${APP.address.PORT
                                ? ':' + APP.address.PORT
                                : ''}/change-password">
                                смените пароль
                       </a>
                    </b>.
                </p>
                
            `
        },
        restorePassword(hash: string = ''): string {
            return `
                <h3> Здравствуйте! </h3>
                <p> 
                    Вы запросили восстановление доступа к сайту www.${APP.address.HOST}, для этого перейдите по 
                    <b>
                        <a 
                            href="${APP.address.PROTOCOL}://${APP.address.HOST}${APP.address.PORT
                                ? ':' + APP.address.PORT
                                : ''}/reset-password/${hash}">
                                ссылке
                       </a>
                    </b>.
                </p>
                <p> Если Вы не запрашивали восстановление доступа к сайту www.${APP.address.HOST}, просто проигнорируйте данное письмо.</p>
            `
        }
    }

    // getters
    public getServerSuccessMessage() {
        return this._successMessage.server
    }

    public getServerErrorMessage() {
        return this._errorMessage.server
    }

    public getDataBaseSuccessMessage() {
        return this._successMessage.dataBase
    }

    public getDataBaseErrorMessage() {
        return this._errorMessage.dataBase
    }

    public getAuthErrorMessage() {
        return this._errorMessage.auth
    }

    public getAuthSuccessMessage() {
        return this._successMessage.auth
    }

    public getEventsName() {
        return this._eventsName
    }

    public getEmailSubjects() {
        return this._emailSubjects
    }

    public getRouteTitles() {
        return this._routeTitles
    }

    public getEmailTemplates() {
        return this._emailTemplates
    }

    public getErrorMessage() {
        return this._errorMessage.errors
    }
}
