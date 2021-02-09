import Express from 'express'
import CookieParse from 'cookie-parser'
import JWT from 'jsonwebtoken'
import hbs from "hbs"
import expressHbs from "express-handlebars"

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

app.engine("hbs", expressHbs({ // настройка hbs, helpers
        layoutsDir: "views/layouts",
        defaultLayout: "main-layout",
        extname: "hbs",
        helpers: {

        }
    })
)
app.set("view engine", "hbs")
hbs.registerPartials("/partials")

app.use(Express.static("./public/js")) // статика

app.use(CookieParse(APP.secure.KEY_FOR_COOKIE)) // Передаем строку шифрования для cookie

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