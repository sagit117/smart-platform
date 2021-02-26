import Mongoose, { Model } from 'mongoose' // библиотека для подключение к mongodb

import app from './app' // файл инициализации приложения
import APP from './configs/server-config'

// models
import RoutesModel, { IRoutesModel } from  './models/routes-model'

// emitters
import events from "./utils/emitters";

// interfaces
interface IRouteRecord {
    url: string,
    updatedAt: Date
}

const checkFindRecord = (model: Model<IRoutesModel>) => (param: object) => model.findOne(param) // возвращает найденную запись

Mongoose.connect(APP.connect.URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(() => {
        // 1. Логируем подключение к БД
        console.log('⚡️[server]: Соединение с mongodb установлено')

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
                    if (error) return events.emit('onError', '⚡️[DB]: Ошибка при создание записи маршрута: ', error)

                    console.log('⚡️[DB]: Создана запись маршрута: ', record)
                })
            }
        })

        // 3. Включаем прослушивание порта
        app.listen(APP.address.PORT, () => {
            console.log(`⚡️[server]: Сервер запущен на ${APP.address.HOST}:${APP.address.PORT}`);
            console.log("⚡️[server]: Сервер ожидает подключения...");
        })
    })
    .catch(error => console.error('⚡️[DB]: Ошибка подключения к mongodb', error))
