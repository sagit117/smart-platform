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
            createUser: '⚡️[DB]: Ошибка при сохранение данных пользователя: ',
            searchForUsersByEmail: '⚡️[DB]: Ошибка при запросе поиска пользователей по email: ',
            checkingPassDuringLogin: '⚡️[DB]: Ошибка при проверки пароля во время логина: ',
            changeRoleUser: '⚡️[DB]: Ошибка при попытке сменить роль пользователя: ',
            confirmEmail: '⚡️[DB]: Ошибка при попытке подтвердить email: '
        },
        auth: {
            emailExists: 'Указанный email уже зарегистрирован!',
            emailIsWrong: 'Введите корректный email!',
            lastTryRegistry: 'Перед повторной регистрацией должно пройти некоторое время!',
            registry: 'Произошла ошибка во время регистрации!',
            passwordOrEmailIsWrong: 'Указанный email или пароль не совпадает!'
        }
    }

    private _successMessage = {
        server: {
            serverIsRunning(host: string, port: number | string) {
                return `⚡️[server]: Сервер запущен на ${host}:${port}`
            },
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
        }
    }

    private _eventsName: {
        registryUser: 'Регистрация пользователя'
    }

    private _emailSubjects: {
        confirmEmail: 'Подтверждение адреса электронной почты'
    }

    private _routeTitles: {
        configurator: 'Конфигуратор',
        confirmEmail: 'Подтверждение email'
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
}
