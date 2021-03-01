export default class Ru {
    private _errorMessage = {
        server: {
            notAllowedCORS: '⚡️[server]: Запрещено настройками CORS',
            notFound: '⚡️[server]: Ресурс не найден',
            accessDenied: '⚡️[server]: Доступ закрыт',
        },
        dataBase: {
            createRoute: '⚡️[DB]: Ошибка при создание записи маршрута: ',
            connectionOn: '⚡️[DB]: Ошибка подключения к mongodb',
            createRequestLog: '⚡️[DB]: Ошибка при сохранение данных в лог подключения: ',

        },
        auth: {
            emailExists: 'Указанный email уже зарегистрирован',
            searchForUsersByEmail: 'Ошибка при запросе поиска пользователей по email: ',
            emailIsWrong: 'Введите корректный email'
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
        }
    }

    public getServerSuccessMessage() {
        return this._successMessage.server
    }

    public getDataBaseSuccessMessage() {
        return this._successMessage.dataBase
    }

    public getServerErrorMessage() {
        return this._errorMessage.server
    }

    public getDataBaseErrorMessage() {
        return this._errorMessage.dataBase
    }

    public getAuthErrorMessage() {
        return this._errorMessage.auth
    }
}
