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
import APP from './configs/server-config'
import { dataBaseErrorMessage, serverErrorMessage } from "./utils/language";

// models
import UsersModel, { IUsersModel } from './models/users-model'
import RoutesModel, { IRoutesModel } from  './models/routes-model'
import RequestLogsModel from './models/request-log-model'

// routers
import configuratorRouter from "./routers/configurator-router"
import usersApiRouters from "./routers/api/users-api-router"

// utils
import { isNumber } from "./utils/is-type"

// emitters
import events from "./utils/emitters";

// controllers
import ConfirmEmailController from "./controllers/confirm-email-controller";

// interfaces
interface IClientInfo {
    date: Date
    requestUrl: string
    requestMethod: string
    requestCookies: { token?: string }
    requestSignedCookies: { token?: string }
    requestIP: string
    body: object
    params: string[]
    user?: IUsersModel | null | undefined
}

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
            // console.log('origin', origin)
            return callback(new Error(serverErrorMessage.notAllowedCORS))
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
app.use(function(request, response) { // not found
    console.log(serverErrorMessage.notFound, request.method, request.originalUrl, 'user:', request.dataMain?.user?.mainEmail)

    return response.status(404).send(serverErrorMessage.notFound)
})

// Вспомогательные функции
async function onRequest(request, response, next) {
    /**
     * 1. Собрать данные о подключение
     */

    const clientInfo: IClientInfo = {
        date: new Date(),
        requestUrl: request.url,
        requestMethod: request.method,
        requestCookies: request.cookies,
        requestSignedCookies: request.signedCookies,
        requestIP: request.ip,
        body: request.body,
        params: request.params
    }

    // =================

    /**
     * 2. Проверить пользователя
     */
    const token: { email?: string } = clientInfo.requestSignedCookies?.token
        ? JWT.verify(clientInfo.requestSignedCookies?.token, APP.secure.KEY_FOR_JWT)
        : {}

    const getUser = (email: string = '') => {
        return UsersModel.findOne({ mainEmail: email })
    }

    const user: IUsersModel | null = await getUser(token?.email)

    Object.assign(clientInfo, { user: user ?? {} }) // записываем данные пользователя в clientInfo

    // =================

    /**
     * 3. Проверить доступ к маршруту
     */

    const getRoutes = (url: string = '') => {
        const requestUrl: string[] = url.split('?') // игнорируем параметры переданные после знака '?'
        const urls: Array<string> = requestUrl[0].split('/')

        /** если последний элемент в маршруте число, сохраняем его как '*'
         * так как это параметр маршрута
         */
        const lastValue: string = urls.pop() || ''
        urls.push(isNumber(lastValue) ? '*' : lastValue)

        return RoutesModel.findOne({ url: urls.join('/') })
    }

    const route: IRoutesModel | null = await getRoutes(clientInfo.requestUrl) // маршрут из базы | null

    const checkAccess = (route: IRoutesModel | null, user: IUsersModel | null | undefined) => {
        if (!route || !user) return { access: true, useLogin: false }

        const denied: boolean[] = []

        const checkDeniedAccess = (arrayAccess: string[] = []) => (arrayRoles: string[] = []) => {
            if (arrayAccess.length) return arrayRoles.length ? arrayRoles.filter(role => arrayAccess.includes(role)).length > 0 : false
            else return false
        }

        const checkSuccessAccess = (arrayAccess: string[] = []) => (arrayRoles: string[] = []) => {
            if (arrayAccess.length) return arrayRoles.length ? arrayRoles.filter(role => arrayAccess.includes(role)).length === 0 : true
            else return false
        }

        denied.push(
            (checkSuccessAccess(route?.roleAccessSuccess))(user?.roles),
            (checkSuccessAccess(route?.userAccessSuccess))([user?.mainEmail]),
            (checkDeniedAccess(route?.roleAccessDenied))(user?.roles),
            (checkDeniedAccess(route?.userAccessDenied))([user?.mainEmail]),
        )

        // useLogin - параметр, который говорит системе, что необходимо в начале пройти логин
        // @ts-ignore
        return { access: !denied.reduce((acc, value) => acc + value), useLogin: !user.mainEmail }
    }

    // =================

    /**
     * 4. записываем в clientInfo данные о доступности маршрута
     */

    Object.assign(clientInfo, { accessRoute: checkAccess(route, clientInfo.user) })

    // =================

    /**
     * 5. Залогировать подключение
     */
    new RequestLogsModel(clientInfo).save(error => {
        if (error) events.emit('onError', dataBaseErrorMessage.createRequestLog, error)
    })

    // =================

    /**
     * 6. Записать данные подключения в request
     */

    request.dataMain = clientInfo

    // =================

    /**
     * 7. передаем управление следующему middleware
     */
    next()

    // =================
}

export default app
