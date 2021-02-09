import Mongoose from 'mongoose' // библиотека для подключение к mongodb

import app from './app.js' // файл инициализации приложения

import APP from './configs/server-config.js'

Mongoose.connect(APP.connect.URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(result => {
        console.log('Соединение с mongodb установлено')

        app.listen(APP.address.PORT, () => {
            console.log(`Сервер запущен на ${APP.address.HOST}:${APP.address.PORT}`);
            console.log("Сервер ожидает подключения...");
        })
    })
    .catch(error => console.error('Ошибка подключения к mongodb', error))