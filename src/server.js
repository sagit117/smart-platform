import Mongoose from 'mongoose' // библиотека для подключение к mongodb

import app from './app.js' // файл инициализации приложения
import APP from './configs/server-config.js'

// models
import RoutesModel from  './models/routes-model.js'

// emitters
import events from "./utils/emitters.js";

const checkFindRecord = model => param => model.findOne(param) // возвращает найденную запись

Mongoose.connect(APP.connect.URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(result => {
        // 1. Логируем подключение к БД
        console.log('Соединение с mongodb установлено')

        // 2. Создаем первичные записи маршрутов
        const checkRoute = checkFindRecord(RoutesModel)

        const routeRecord = []

        routeRecord.push({
            url: '/configurator',
            updatedAt: new Date(),
            // access
        })

        routeRecord.forEach(async record => {
            if (!await checkRoute({ url: record.url })) { // маршрут не найден
                new RoutesModel(record).save(error => {
                    if (error) return events.emit('onError', 'Ошибка при создание записи маршрута: ', error)

                    console.log('Создана запись маршрута: ', record)
                })
            }
        })

        // 3. Включаем прослушивание порта
        app.listen(APP.address.PORT, () => {
            console.log(`Сервер запущен на ${APP.address.HOST}:${APP.address.PORT}`);
            console.log("Сервер ожидает подключения...");
        })
    })
    .catch(error => console.error('Ошибка подключения к mongodb', error))
