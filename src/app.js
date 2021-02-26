import Express from 'express'
import CookieParse from 'cookie-parser'
import JWT from 'jsonwebtoken'
import HBS from 'hbs'
import ExpressHbs from "express-handlebars"
import Helmet from 'helmet'
import CORS from 'cors'
import Compression from 'compression'
import BodyParser from "body-parser"

// config
import APP from './configs/server-config.js'

// models
import UsersModel from './models/users-model.js'
import RoutesModel from  './models/routes-model.js'
import RequestLogsModel from './models/request-log-model.js'

// routers
import configuratorRouter from "./routers/configurator-router.js"
import usersApiRouters from "./routers/api/users-api-router.js"

// utils
import { isNumber } from "./utils/is-type.js"

// emitters
import events from "./utils/emitters.js";

// controllers
import ConfirmEmailController from "./controllers/confirm-email-controller.js";

const app = Express() // создаем экземпляр експресс

// настройка hbs, helpers
app.engine("hbs", ExpressHbs({
        layoutsDir: "build-server/views/layouts",
        defaultLayout: "main-layout",
        extname: "hbs",
        helpers: {

        }
    })
)
app.set("view engine", "hbs")
HBS.registerPartials("/partials")

// статика
app.use(Express.static("build-server/dist"))
app.use(Express.static("build-server/public/css"))

// защита сервера
app.use(Helmet())
// настройка helmet
app.use(Helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: [ "'self'" ],
        scriptSrc: [ "'self'", "'unsafe-eval'" ],
        styleSrc: [ "'self'", "'unsafe-inline'", 'fonts.googleapis.com', 'fonts.gstatic.com' ],
        fontSrc: ["'self'",  'fonts.googleapis.com', 'fonts.gstatic.com'],
    }
}))
// app.use(helmet.referrerPolicy({
//   policy: ["origin"],
// }))

// настройка CORS
const whitelist = [ APP.address.PROTOCOL + "://" + APP.address.HOST + ':' + APP.address.PORT ]
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin || origin === 'null') {
            return callback(null, true)
        } else {
            console.log(origin)
            return callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
}
app.use(CORS(corsOptions))

// сжатие
app.use(Compression())

// парсеры
app.use(CookieParse(APP.secure.KEY_FOR_COOKIE)) // Передаем строку шифрования для cookie
const urlencodedParser = BodyParser.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }) // чтение данных из форм
const jsonParser = BodyParser.json({ limit: '50mb' }) // чтение данных из json
app.use(urlencodedParser)
app.use(jsonParser)

// middleware function
app.use(onRequest)

// routes
app.use('/configurator', configuratorRouter)
app.get('/confirm_email/:hash', (request, response) => {
    // подтверждение email
    return new ConfirmEmailController(request, response).confirm()
})

// routers API
app.use('/api/users', usersApiRouters)

// обработка не существующего маршрута
app.use(function (request, response) { // not found
    console.log('Not Found', request.method, request.originalUrl, 'user:', request.dataMain?.user?.email)
    response.status(404).send("Not Found")
})
// Вспомогательные функции
async function onRequest(request, response, next) {
    // 1. Собрать данные о подключение
    const getClientInfo = () => {
        return {
            date: new Date(),
            requestUrl: request.url,
            requestMethod: request.method,
            requestCookies: request.cookies,
            requestSignedCookies: request.signedCookies,
            requestIP: request.ip,
            body: request.body,
            params: request.params
        }
    }

    const clientInfo = getClientInfo()

    // 2. Проверить пользователя
    const token = clientInfo.requestSignedCookies?.token
        ? JWT.verify(clientInfo.requestSignedCookies?.token, APP.secure.KEY_FOR_JWT)
        : false
    // console.log(token)

    const getUser = (email = '') => {
        return UsersModel.findOne({ mainEmail: email })
    }

    const user = await getUser(token.email)
    // console.log(user)

    Object.assign(clientInfo, { user: user ?? {} }) // записываем данные пользователя в clientInfo

    // 3. Проверить доступ к маршруту
    const getRoutes = (url = '') => {
        const requestUrl = url.split('?') // игнорируем параметры переданные после знака '?'
        const urls = requestUrl[0].split('/')

        /** если последний элемент в маршруте число, сохраняем его как '*'
         * так как это параметр маршрута
         */
        const lastValue = urls.pop()
        urls.push(isNumber(lastValue) ? '*' : lastValue)

        return RoutesModel.findOne({ url: urls.join('/') })
    }

    const route = await getRoutes(clientInfo.requestUrl) // маршрут из базы | null

    const checkAccess = (route = {
        roleAccessSuccess: [],
        userAccessSuccess: [],
        roleAccessDenied: [],
        userAccessDenied: []
    }, user = {}) => {
        const denied = []

        const checkDeniedAccess = (arrayAccess = []) => (arrayRoles = []) => {
            if (arrayAccess.length) return arrayRoles.length ? arrayRoles.filter(role => arrayAccess.includes(role)).length > 0 : false
            return false
        }

        const checkSuccessAccess = (arrayAccess = []) => (arrayRoles = []) => {
            // console.log(arrayRoles, arrayAccess, arrayRoles.filter(role => arrayAccess.includes(role)).length === 0)
            if (arrayAccess.length) return arrayRoles.length ? arrayRoles.filter(role => arrayAccess.includes(role)).length === 0 : true
            return false
        }

        denied.push(
            (checkSuccessAccess(route?.roleAccessSuccess))(user?.roles),
            (checkSuccessAccess(route?.userAccessSuccess))([user?.mainEmail]),
            (checkDeniedAccess(route?.roleAccessDenied))(user?.roles),
            (checkDeniedAccess(route?.userAccessDenied))([user?.mainEmail]),
        )
        // console.log(denied)
        // console.log('result:', {access: !denied.reduce((acc, value) => acc + value), useLogin: !user.mainEmail})

        // useLogin - параметр, который говорит системе, что необходимо в начале пройти логин
        return { access: !denied.reduce((acc, value) => acc + value), useLogin: !user.mainEmail }
    }

    // записываем в clientInfo данные о доступности маршрута
    // console.log(clientInfo, route)
    Object.assign(clientInfo, { accessRoute: checkAccess(route, clientInfo.user) })

    // 4. Залогировать подключение
    new RequestLogsModel(clientInfo).save(error => {
        if (error) events.emit('onError', 'Ошибка при сохранение данных в лог подключения: ', error)
    })

    // 5. Записать данные подключения в request
    request.dataMain = clientInfo

    // передаем управление следующему middleware
    next()
}

export default app
