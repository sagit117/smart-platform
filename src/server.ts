import Mongoose, { Model } from 'mongoose' // библиотека для подключение к mongodb

import app from './app' // файл инициализации приложения
import Config from './configs/server-config'
import Lang from './dictionary/language'

// models
import RoutesModel, { IRoutesModel } from  './models/routes-model'

// emitters
import events from "./utils/emitters";

// interfaces
interface IRouteRecord {
    url: string,
    updatedAt: Date,
    roleAccessSuccess: string[]
}

interface IParam {
    url: string
}

const checkFindRecord = (model: Model<IRoutesModel>) => (param: IParam) => model.findOne(param) // возвращает найденную запись

const L = new Lang(Config.LANG)

Mongoose.connect(Config.connect.URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(() => {
        // 1. Логируем подключение к БД
        console.log(L.translate('Соединение с mongodb установлено'))

        // 2. Создаем первичные записи маршрутов
        const checkRoute = checkFindRecord(RoutesModel)

        const routeRecord: Array<IRouteRecord> = []

        routeRecord.push({
            url: '/configurator',
            updatedAt: new Date(),
            roleAccessSuccess: [ 'admin' ]
        })

        routeRecord.forEach(async record => {
            if (!await checkRoute({ url: record.url })) { // маршрут не найден
                new RoutesModel(record).save(error => {
                    if (error) return events.emit('onError', L.translate('Ошибка при создание записи маршрута: '), error)

                    console.log(L.translate('Создана запись маршрута:'), record)
                })
            }
        })

        // 3. Включаем прослушивание порта
        app.listen(Config.address.PORT, () => {
            console.log(L.translate('Сервер запущен на {{host}}:{{port}}', { host: Config.address.HOST, port: Config.address.PORT }))
            console.log(L.translate('Сервер ожидает подключения...'))
        })
    })
    .catch(error => console.error(L.translate('Ошибка подключения к mongodb: '), error))
