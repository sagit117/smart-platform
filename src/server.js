import Mongoose from 'mongoose' // библиотека для подключение к mongodb

import app from './app.js' // файл инициализации приложения
import APP from './configs/server-config.js'

// models
import RoutesModel from  './models/routes-model.js'

const checkFindRecord = model => param => model.findOne(param) // возвращает найденную запись

Mongoose.connect(APP.connect.URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(async result => {
        // 1. Логируем подключение к БД
        console.log('Соединение с mongodb установлено')

        // 2. Создаем первичные записи маршрутов
        const checkRoute = checkFindRecord(RoutesModel)

        const constructorRecord = {
            url: '/constructor',
            updatedAt: new Date(),
            // access
        }
        if (!await checkRoute({ url: constructorRecord.url })) { // маршрут не найден
            new RoutesModel(constructorRecord).save(error => {
                if (error) console.error(error)
            })
        }


        // 3. Включаем прослушивание порта
        app.listen(APP.address.PORT, () => {
            console.log(`Сервер запущен на ${APP.address.HOST}:${APP.address.PORT}`);
            console.log("Сервер ожидает подключения...");
        })
    })
    .catch(error => console.error('Ошибка подключения к mongodb', error))
