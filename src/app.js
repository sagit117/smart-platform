import Express from 'express'
import CookieParse from 'cookie-parser'
import JWT from 'jsonwebtoken'
import HBS from 'hbs'
import ExpressHbs from "express-handlebars"
import Helmet from 'helmet'
import CORS from 'cors'
import Compression from 'compression'

// config
import APP from './configs/server-config.js'

// models
import UsersModel from './models/users-model.js'
import RoutesModel from  './models/routes-model.js'
import RequestLogsModel from './models/request-log-model.js'

// routers
import configuratorRouter from "./routers/configurator-router.js";

// utils
import { isNumber } from "./utils/is-type.js";

const app = Express() // создаем экземпляр експресс

// настройка hbs, helpers
app.engine("hbs", ExpressHbs({
        layoutsDir: "views/layouts",
        defaultLayout: "main-layout",
        extname: "hbs",
        helpers: {

        }
    })
)
app.set("view engine", "hbs")
HBS.registerPartials("/partials")

// статика
app.use(Express.static("./public/js"))

// защита сервера
app.use(Helmet())
// настройка helmet
app.use(Helmet.contentSecurityPolicy({
    directives:{
        defaultSrc: ["'self'"]
        // defaultSrc: ["'self'", "'unsafe-inline'"],
        // connectSrc: ["'self'", "sti-trade.ru", "1cweb01.tavros.ru"], // for sti (sti-trade.ru/1cweb01.tavros.ru)
        // scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        // fontSrc: ["'self'",  'fonts.googleapis.com', 'fonts.gstatic.com'],
        // styleSrc: ["'self'", "'unsafe-inline'", 'fonts.googleapis.com', 'fonts.gstatic.com'],
        // imgSrc: ["'self'", `data:`]
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

// middleware function
app.use(onRequest)

// routes
app.use('/configurator', configuratorRouter)

// Вспомогательные функции
async function onRequest(request, response, next) {
    // 1. Собрать данные о подключение
    const getClientInfo = () => {
        return {
            date: new Date(),
            requestUrl: request.url,
            requestMethod: request.method,
            requestCookies: request.cookies,
            requestSignedCookies: request.signedCookies
        }
    }

    const clientInfo = getClientInfo()

    // 2. Проверить пользователя
    const token = JWT.verify(clientInfo.requestSignedCookies.token, APP.secure.KEY_FOR_JWT)

    const getUser = (email = '') => {
        return UsersModel.findOne({ email })
    }

    const user = await getUser(token.email)

    Object.assign(clientInfo, { user: user ?? {} }) // записываем данные пользователя в clientInfo

    // 3. Проверить доступ к маршруту
    const getRoutes = (url = '') => {
        const urls = url.split('/')

        /** если последний элемент в маршруте число, сохраняем его как '*'
         * так как это параметр маршрута
         */
        const lastValue = urls.pop()
        urls.push(isNumber(lastValue) ? '*' : lastValue)

        return RoutesModel.findOne({ url: urls.join('/') })
    }

    const route = await getRoutes(clientInfo.requestUrl)

    const checkAccess = (route = {
        roleAccessSuccess: [],
        userAccessSuccess: [],
        roleAccessDenied: [],
        userAccessDenied: []
    }, user = {}) => {
        const denied = []
        denied.push(
            !route.roleAccessSuccess.includes(user.role),
            !route.userAccessSuccess.includes(user.email),
            route.roleAccessDenied.includes(user.role),
            route.userAccessDenied.includes(user.email)
        )

        // useLogin - параметр, который говорит системе, что необходимо в начале пройти логин
        return { access: !denied.reduce((acc, value) => acc + value), useLogin: !user.email }
    }

    // записываем в clientInfo данные о доступности маршрута
    Object.assign(clientInfo, { accessRoute: checkAccess(route, clientInfo.user) })

    // 4. Залогировать подключение
    new RequestLogsModel(clientInfo).save(error => {
        if (error) console.error(error)
    })

    // передаем управление следующему middleware
    next()
}

export default app