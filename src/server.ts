import Mongoose, { Model, Query } from 'mongoose' // библиотека для подключение к mongodb

import app from './app' // файл инициализации приложения
import APP from './configs/server-config'
import { setDictionary } from './dictionary/connect-dictionary' // словарь переводов

// models
import RoutesModel, { IRoutesModel } from  './models/routes-model'

// emitters
import events from "./utils/emitters";

// interfaces
interface IRouteRecord {
    url: string,
    updatedAt: Date
}

interface IParam {
    url: string
}

const Lang = setDictionary(APP.LANG)
const serverSuccessMessage = Lang.getServerSuccessMessage()
const dataBaseSuccessMessage = Lang.getDataBaseSuccessMessage()
const dataBaseErrorMessage = Lang.getDataBaseErrorMessage()

const checkFindRecord = (model: Model<IRoutesModel>) => (param: IParam) => model.findOne(param) // возвращает найденную запись

Mongoose.connect(APP.connect.URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(() => {
        // 1. Логируем подключение к БД
        console.log(dataBaseSuccessMessage.connectionOn)

        // 2. Создаем первичные записи маршрутов
        const checkRoute = checkFindRecord(RoutesModel)

        const routeRecord: Array<IRouteRecord> = []

        routeRecord.push({
            url: '/configurator',
            updatedAt: new Date(),
        })

        routeRecord.forEach(async record => {
            if (!await checkRoute({ url: record.url })) { // маршрут не найден
                new RoutesModel(record).save(error => {
                    if (error) return events.emit('onError', dataBaseErrorMessage.createRoute , error)

                    console.log(dataBaseSuccessMessage.createRoute, record)
                })
            }
        })

        // 3. Включаем прослушивание порта
        app.listen(APP.address.PORT, () => {
            console.log(serverSuccessMessage.serverIsRunning)
            console.log(serverSuccessMessage.serverIsWaiting)
        })
    })
    .catch(error => console.error(dataBaseErrorMessage.connectionOn, error))
