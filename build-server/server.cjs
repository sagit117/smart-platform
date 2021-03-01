/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var hbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hbs */ \"hbs\");\n/* harmony import */ var hbs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hbs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express_handlebars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express-handlebars */ \"express-handlebars\");\n/* harmony import */ var express_handlebars__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_handlebars__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _configs_server_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./configs/server-config */ \"./src/configs/server-config.ts\");\n/* harmony import */ var _dictionary_connect_dictionary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dictionary/connect-dictionary */ \"./src/dictionary/connect-dictionary.ts\");\n/* harmony import */ var _models_users_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./models/users-model */ \"./src/models/users-model.ts\");\n/* harmony import */ var _models_routes_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./models/routes-model */ \"./src/models/routes-model.ts\");\n/* harmony import */ var _models_request_log_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./models/request-log-model */ \"./src/models/request-log-model.ts\");\n/* harmony import */ var _routers_configurator_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routers/configurator-router */ \"./src/routers/configurator-router.ts\");\n/* harmony import */ var _routers_api_users_api_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routers/api/users-api-router */ \"./src/routers/api/users-api-router.ts\");\n/* harmony import */ var _utils_is_type__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/is-type */ \"./src/utils/is-type.ts\");\n/* harmony import */ var _utils_emitters__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/emitters */ \"./src/utils/emitters.ts\");\n/* harmony import */ var _controllers_confirm_email_controller__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./controllers/confirm-email-controller */ \"./src/controllers/confirm-email-controller.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\n\n\n\n// config\n\n // словарь переводов\n// models\n\n\n\n// routers\n\n\n// utils\n\n// emitters\n\n// controllers\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // создаем экземпляр експресс\nconst Lang = (0,_dictionary_connect_dictionary__WEBPACK_IMPORTED_MODULE_10__.setDictionary)(_configs_server_config__WEBPACK_IMPORTED_MODULE_9__.default.LANG);\nconst dataBaseErrorMessage = Lang.getDataBaseErrorMessage();\nconst serverErrorMessage = Lang.getServerErrorMessage();\n// настройка hbs, helpers\napp.engine(\"hbs\", express_handlebars__WEBPACK_IMPORTED_MODULE_4___default()({\n    layoutsDir: \"views/layouts\",\n    defaultLayout: \"main-layout\",\n    extname: \"hbs\",\n    helpers: {}\n}));\napp.set(\"view engine\", \"hbs\");\nhbs__WEBPACK_IMPORTED_MODULE_3___default().registerPartials(\"/partials\");\n// статика\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(\"build-server/dist\"));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(\"build-server/public/css\"));\n// защита сервера\napp.use(helmet__WEBPACK_IMPORTED_MODULE_5___default()());\n// настройка helmet\napp.use(helmet__WEBPACK_IMPORTED_MODULE_5___default().contentSecurityPolicy({\n    directives: {\n        defaultSrc: [\"'self'\"],\n        scriptSrc: [\"'self'\", \"'unsafe-eval'\"],\n        styleSrc: [\"'self'\", \"'unsafe-inline'\", 'fonts.googleapis.com', 'fonts.gstatic.com'],\n        fontSrc: [\"'self'\", 'fonts.googleapis.com', 'fonts.gstatic.com'],\n    }\n}));\n// app.use(helmet.referrerPolicy({\n//   policy: [\"origin\"],\n// }))\n// настройка CORS\nconst whitelist = [_configs_server_config__WEBPACK_IMPORTED_MODULE_9__.default.address.PROTOCOL + \"://\" + _configs_server_config__WEBPACK_IMPORTED_MODULE_9__.default.address.HOST + ':' + _configs_server_config__WEBPACK_IMPORTED_MODULE_9__.default.address.PORT];\nconst corsOptions = {\n    origin: function (origin, callback) {\n        if (whitelist.indexOf(origin) !== -1 || !origin || origin === 'null') {\n            return callback(null, true);\n        }\n        else {\n            // console.log('origin', origin)\n            return callback(new Error(serverErrorMessage.notAllowedCORS));\n        }\n    },\n    optionsSuccessStatus: 200\n};\napp.use(cors__WEBPACK_IMPORTED_MODULE_6___default()(corsOptions));\n// сжатие\napp.use(compression__WEBPACK_IMPORTED_MODULE_7___default()());\n// парсеры\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_1___default()(_configs_server_config__WEBPACK_IMPORTED_MODULE_9__.default.secure.KEY_FOR_COOKIE)); // Передаем строку шифрования для cookie\nconst urlencodedParser = body_parser__WEBPACK_IMPORTED_MODULE_8___default().urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }); // чтение данных из форм\nconst jsonParser = body_parser__WEBPACK_IMPORTED_MODULE_8___default().json({ limit: '50mb' }); // чтение данных из json\napp.use(urlencodedParser);\napp.use(jsonParser);\n// middleware function\napp.use(onRequest);\n// routes\napp.use('/configurator', _routers_configurator_router__WEBPACK_IMPORTED_MODULE_14__.default);\napp.get('/confirm_email/:hash', (request, response) => {\n    // подтверждение email\n    return new _controllers_confirm_email_controller__WEBPACK_IMPORTED_MODULE_18__.default(request, response).confirm();\n});\n// routers API\napp.use('/api/users', _routers_api_users_api_router__WEBPACK_IMPORTED_MODULE_15__.default);\n// обработка не существующего маршрута\napp.use(function (request, response) {\n    var _a, _b;\n    console.log(serverErrorMessage.notFound, request.method, request.originalUrl, 'user:', (_b = (_a = request.dataMain) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.mainEmail);\n    return response.status(404).send(serverErrorMessage.notFound);\n});\n// Вспомогательные функции\nfunction onRequest(request, response, next) {\n    var _a, _b;\n    return __awaiter(this, void 0, void 0, function* () {\n        // 1. Собрать данные о подключение\n        const clientInfo = {\n            date: new Date(),\n            requestUrl: request.url,\n            requestMethod: request.method,\n            requestCookies: request.cookies,\n            requestSignedCookies: request.signedCookies,\n            requestIP: request.ip,\n            body: request.body,\n            params: request.params\n        };\n        // 2. Проверить пользователя\n        const token = ((_a = clientInfo.requestSignedCookies) === null || _a === void 0 ? void 0 : _a.token)\n            ? jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify((_b = clientInfo.requestSignedCookies) === null || _b === void 0 ? void 0 : _b.token, _configs_server_config__WEBPACK_IMPORTED_MODULE_9__.default.secure.KEY_FOR_JWT)\n            : {};\n        const getUser = (email = '') => {\n            return _models_users_model__WEBPACK_IMPORTED_MODULE_11__.default.findOne({ mainEmail: email });\n        };\n        const user = yield getUser(token === null || token === void 0 ? void 0 : token.email);\n        Object.assign(clientInfo, { user: user !== null && user !== void 0 ? user : {} }); // записываем данные пользователя в clientInfo\n        // 3. Проверить доступ к маршруту\n        const getRoutes = (url = '') => {\n            const requestUrl = url.split('?'); // игнорируем параметры переданные после знака '?'\n            const urls = requestUrl[0].split('/');\n            /** если последний элемент в маршруте число, сохраняем его как '*'\n             * так как это параметр маршрута\n             */\n            const lastValue = urls.pop() || '';\n            urls.push((0,_utils_is_type__WEBPACK_IMPORTED_MODULE_16__.isNumber)(lastValue) ? '*' : lastValue);\n            return _models_routes_model__WEBPACK_IMPORTED_MODULE_12__.default.findOne({ url: urls.join('/') });\n        };\n        const route = yield getRoutes(clientInfo.requestUrl); // маршрут из базы | null\n        const checkAccess = (route, user) => {\n            if (!route || !user)\n                return { access: true, useLogin: false };\n            const denied = [];\n            const checkDeniedAccess = (arrayAccess = []) => (arrayRoles = []) => {\n                if (arrayAccess.length)\n                    return arrayRoles.length ? arrayRoles.filter(role => arrayAccess.includes(role)).length > 0 : false;\n                else\n                    return false;\n            };\n            const checkSuccessAccess = (arrayAccess = []) => (arrayRoles = []) => {\n                if (arrayAccess.length)\n                    return arrayRoles.length ? arrayRoles.filter(role => arrayAccess.includes(role)).length === 0 : true;\n                else\n                    return false;\n            };\n            denied.push((checkSuccessAccess(route === null || route === void 0 ? void 0 : route.roleAccessSuccess))(user === null || user === void 0 ? void 0 : user.roles), (checkSuccessAccess(route === null || route === void 0 ? void 0 : route.userAccessSuccess))([user === null || user === void 0 ? void 0 : user.mainEmail]), (checkDeniedAccess(route === null || route === void 0 ? void 0 : route.roleAccessDenied))(user === null || user === void 0 ? void 0 : user.roles), (checkDeniedAccess(route === null || route === void 0 ? void 0 : route.userAccessDenied))([user === null || user === void 0 ? void 0 : user.mainEmail]));\n            // console.log(denied)\n            // console.log('result:', {access: !denied.reduce((acc, value) => acc + value), useLogin: !user.mainEmail})\n            // useLogin - параметр, который говорит системе, что необходимо в начале пройти логин\n            // @ts-ignore\n            return { access: !denied.reduce((acc, value) => acc + value), useLogin: !user.mainEmail };\n        };\n        // записываем в clientInfo данные о доступности маршрута\n        console.log(clientInfo, route);\n        Object.assign(clientInfo, { accessRoute: checkAccess(route, clientInfo.user) });\n        // 4. Залогировать подключение\n        new _models_request_log_model__WEBPACK_IMPORTED_MODULE_13__.default(clientInfo).save(error => {\n            if (error)\n                _utils_emitters__WEBPACK_IMPORTED_MODULE_17__.default.emit('onError', dataBaseErrorMessage.createRequestLog, error);\n        });\n        // 5. Записать данные подключения в request\n        request.dataMain = clientInfo;\n        // передаем управление следующему middleware\n        next();\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n\n//# sourceURL=webpack://smart-platform/./src/app.ts?");

/***/ }),

/***/ "./src/configs/limits-config.ts":
/*!**************************************!*\
  !*** ./src/configs/limits-config.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    limitTimeOfRegistration: 1 // minute\n});\n\n\n//# sourceURL=webpack://smart-platform/./src/configs/limits-config.ts?");

/***/ }),

/***/ "./src/configs/mailer-config.ts":
/*!**************************************!*\
  !*** ./src/configs/mailer-config.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MAILER_FROM\": () => (/* binding */ MAILER_FROM)\n/* harmony export */ });\nconst MAILER_FROM = 'reports.sti.mailer@gmail.com';\n\n\n//# sourceURL=webpack://smart-platform/./src/configs/mailer-config.ts?");

/***/ }),

/***/ "./src/configs/server-config.ts":
/*!**************************************!*\
  !*** ./src/configs/server-config.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    address: {\n        HOST:  false ? 0 : 'localhost',\n        PORT: 3333,\n        PROTOCOL: 'http',\n    },\n    secure: {\n        KEY_FOR_COOKIE: 'shop4secure-token-for-cookies',\n        KEY_FOR_JWT: 'shop4secure-token-for-jwt'\n    },\n    connect: {\n        URL: 'mongodb://localhost:27017/smart_shop'\n    },\n    cookie: {\n        COOKIE_SECURE: false // false - http || true - https\n    },\n    LANG: 'RU'\n});\n\n\n//# sourceURL=webpack://smart-platform/./src/configs/server-config.ts?");

/***/ }),

/***/ "./src/controllers/api/smart-api-controller.ts":
/*!*****************************************************!*\
  !*** ./src/controllers/api/smart-api-controller.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SmartApiController)\n/* harmony export */ });\n/* harmony import */ var _dictionary_connect_dictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dictionary/connect-dictionary */ \"./src/dictionary/connect-dictionary.ts\");\n/* harmony import */ var _configs_server_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configs/server-config */ \"./src/configs/server-config.ts\");\n // словарь переводов\n\nconst Lang = (0,_dictionary_connect_dictionary__WEBPACK_IMPORTED_MODULE_0__.setDictionary)(_configs_server_config__WEBPACK_IMPORTED_MODULE_1__.default.LANG);\nconst serverErrorMessage = Lang.getServerErrorMessage();\nclass SmartApiController {\n    constructor(request, response) {\n        var _a, _b;\n        this.request = request;\n        this.response = response;\n        this.objectAccess = (_b = (_a = this.request) === null || _a === void 0 ? void 0 : _a.dataMain) === null || _b === void 0 ? void 0 : _b.accessRoute;\n    }\n    errorHandler(message = serverErrorMessage.accessDenied) {\n        return this.response.status(403).send({ message, success: false });\n    }\n}\n\n\n//# sourceURL=webpack://smart-platform/./src/controllers/api/smart-api-controller.ts?");

/***/ }),

/***/ "./src/controllers/api/users-controller.ts":
/*!*************************************************!*\
  !*** ./src/controllers/api/users-controller.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UsersApiController)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _smart_api_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-api-controller */ \"./src/controllers/api/smart-api-controller.ts\");\n/* harmony import */ var _models_event_logs_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/event-logs-model */ \"./src/models/event-logs-model.ts\");\n/* harmony import */ var _models_users_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/users-model */ \"./src/models/users-model.ts\");\n/* harmony import */ var _configs_limits_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../configs/limits-config */ \"./src/configs/limits-config.ts\");\n/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/validate */ \"./src/utils/validate.ts\");\n/* harmony import */ var _utils_emitters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/emitters */ \"./src/utils/emitters.ts\");\n/* harmony import */ var _utils_generators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/generators */ \"./src/utils/generators.ts\");\n/* harmony import */ var _configs_server_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../configs/server-config */ \"./src/configs/server-config.ts\");\n/* harmony import */ var _dictionary_connect_dictionary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dictionary/connect-dictionary */ \"./src/dictionary/connect-dictionary.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\n\n\n\n // словарь переводов\nconst Lang = (0,_dictionary_connect_dictionary__WEBPACK_IMPORTED_MODULE_9__.setDictionary)(_configs_server_config__WEBPACK_IMPORTED_MODULE_8__.default.LANG);\nconst serverSuccessMessage = Lang.getServerSuccessMessage();\nconst dataBaseErrorMessage = Lang.getDataBaseErrorMessage();\nconst eventsName = Lang.getEventsName();\nconst serverErrorMessage = Lang.getServerErrorMessage();\nconst authErrorMessage = Lang.getAuthErrorMessage();\nconst authSuccessMessage = Lang.getAuthSuccessMessage();\nconst emailSubjects = Lang.getEmailSubjects();\nconst emailTemplates = Lang.getEmailTemplates();\nclass UsersApiController extends _smart_api_controller__WEBPACK_IMPORTED_MODULE_1__.default {\n    constructor(request, response) {\n        super(request, response);\n    }\n    registrationWithEmail() {\n        var _a, _b, _c;\n        return __awaiter(this, void 0, void 0, function* () {\n            // 1. если пользователь авторизован или запрос пуст, повторную авторизацию не проводить\n            if ((_a = this.request.dataMain) === null || _a === void 0 ? void 0 : _a.user)\n                return this.errorHandler(serverSuccessMessage.accessSuccess);\n            if (!((_b = this.request.dataMain) === null || _b === void 0 ? void 0 : _b.body))\n                return this.errorHandler(serverErrorMessage.accessDenied);\n            const data = this.request.dataMain.body;\n            // 1. Проверить анти-спам поле\n            if (data === null || data === void 0 ? void 0 : data.antiSpam)\n                return this.errorHandler(serverErrorMessage.accessDenied);\n            // 2. Проверить на корректность email\n            if (!(0,_utils_validate__WEBPACK_IMPORTED_MODULE_5__.testEmail)(data === null || data === void 0 ? void 0 : data.email))\n                return this.errorHandler(authErrorMessage.emailIsWrong);\n            // 3. Проверить на существование email\n            const getUserWithEmail = (email = '') => {\n                return _models_users_model__WEBPACK_IMPORTED_MODULE_3__.default.findOne({\n                    $or: [\n                        { mainEmail: email },\n                        { \"emails.value\": email }\n                    ]\n                })\n                    .catch(error => _utils_emitters__WEBPACK_IMPORTED_MODULE_6__.default.emit('onError', dataBaseErrorMessage.searchForUsersByEmail, error));\n            };\n            if (yield getUserWithEmail(data === null || data === void 0 ? void 0 : data.email))\n                return this.errorHandler(authErrorMessage.emailExists);\n            // 4. Проверить количество попыток регистрации с IP за указанное время\n            const getLastTryRegistration = (IP = '') => {\n                return _models_event_logs_model__WEBPACK_IMPORTED_MODULE_2__.default.find({ eventName: eventsName.registryUser, requestIP: IP })\n                    .sort({ date: -1, _id: -1 })\n                    .limit(2)\n                    .catch(error => _utils_emitters__WEBPACK_IMPORTED_MODULE_6__.default.emit('onError', dataBaseErrorMessage.lastTryRegistry, error));\n            };\n            const records = yield getLastTryRegistration((_c = this.request.dataMain) === null || _c === void 0 ? void 0 : _c.requestIP); // 2 записи последней регистрации по IP\n            // console.log(records)\n            if (Array.isArray(records) && records.length === 2) {\n                // @ts-ignore\n                const delta = new Date() - new Date(records[1].date);\n                // console.log(delta, new Date(), new Date(records[1].date), delta / 1000 / 60)\n                if ((delta / 1000 / 60) < _configs_limits_config__WEBPACK_IMPORTED_MODULE_4__.default.limitTimeOfRegistration)\n                    return this.errorHandler(authErrorMessage.lastTryRegistry);\n            }\n            // 5. Создать запись\n            const hash = (0,_utils_generators__WEBPACK_IMPORTED_MODULE_7__.randomKeyGenerator)(); // хеш для подтверждения email\n            const user = new _models_users_model__WEBPACK_IMPORTED_MODULE_3__.default({\n                mainEmail: data === null || data === void 0 ? void 0 : data.email,\n                password: data === null || data === void 0 ? void 0 : data.password,\n                updatedAt: new Date(),\n                hash,\n                roles: ['temp-role']\n            });\n            let isSave = true;\n            user.save(error => {\n                if (error) {\n                    _utils_emitters__WEBPACK_IMPORTED_MODULE_6__.default.emit('onError', dataBaseErrorMessage.createUser, error);\n                    isSave = false;\n                }\n            });\n            if (!isSave)\n                return this.errorHandler(authErrorMessage.registry);\n            // 6. Выслать письмо для подтверждения email\n            _utils_emitters__WEBPACK_IMPORTED_MODULE_6__.default.emit('sendMail', data === null || data === void 0 ? void 0 : data.email, emailSubjects.confirmEmail, emailTemplates.confirmEmailTemplate(hash), this.request);\n            // 7. Логировать event\n            this.request.dataMain.user = user;\n            _utils_emitters__WEBPACK_IMPORTED_MODULE_6__.default.emit('saveEventLogs', eventsName.registryUser, data === null || data === void 0 ? void 0 : data.email, this.request);\n            // 8. Выслать ответ\n            return this.response.status(200).send({ message: authSuccessMessage.registry, success: true, data: { email: data === null || data === void 0 ? void 0 : data.email } });\n        });\n    }\n    loginWithEmail() {\n        var _a, _b;\n        return __awaiter(this, void 0, void 0, function* () {\n            // 1. если пользователь авторизован или запрос пуст, повторную авторизацию не проводить\n            if ((_a = this.request.dataMain) === null || _a === void 0 ? void 0 : _a.user)\n                return this.errorHandler(authSuccessMessage.auth);\n            if (!((_b = this.request.dataMain) === null || _b === void 0 ? void 0 : _b.body))\n                return this.errorHandler(serverErrorMessage.accessDenied);\n            const data = this.request.dataMain.body;\n            // 2. Проверить анти-спам поле\n            if (data === null || data === void 0 ? void 0 : data.antiSpam)\n                return this.errorHandler(serverErrorMessage.accessDenied);\n            // 3. Проверить на существование email\n            const getUserWithEmail = (email = '') => {\n                return _models_users_model__WEBPACK_IMPORTED_MODULE_3__.default.findOne({ mainEmail: email })\n                    .catch(error => _utils_emitters__WEBPACK_IMPORTED_MODULE_6__.default.emit('onError', dataBaseErrorMessage.searchForUsersByEmail, error));\n            };\n            const user = yield getUserWithEmail(data === null || data === void 0 ? void 0 : data.email);\n            if (!user)\n                return this.errorHandler(authErrorMessage.passwordOrEmailIsWrong);\n            // 4. Проверить пароль\n            const isLoginSuccess = user.comparePassword(data === null || data === void 0 ? void 0 : data.password, (error, match) => {\n                if (!match)\n                    return false;\n                if (error) {\n                    _utils_emitters__WEBPACK_IMPORTED_MODULE_6__.default.emit('onError', dataBaseErrorMessage.checkingPassDuringLogin, error);\n                    return false;\n                }\n                return true;\n            });\n            if (!isLoginSuccess)\n                return this.errorHandler(authErrorMessage.passwordOrEmailIsWrong);\n            // 5. Установить куки\n            const date = new Date();\n            date.setDate(date.getDate() + 30);\n            const jwt = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n                email: user.mainEmail,\n                id: user._id,\n                exp: date.getTime()\n            }, _configs_server_config__WEBPACK_IMPORTED_MODULE_8__.default.secure.KEY_FOR_JWT);\n            this.response.cookie('token', jwt, {\n                maxAge: 1000 * 60 * 60 * 24 * 30,\n                secure: _configs_server_config__WEBPACK_IMPORTED_MODULE_8__.default.cookie.COOKIE_SECURE,\n                httpOnly: true,\n                signed: true,\n                domain: _configs_server_config__WEBPACK_IMPORTED_MODULE_8__.default.address.HOST,\n                sameSite: \"lax\"\n            });\n            // 6. TODO: Выслать подтверждение на email\n            console.log(this.request.dataMain);\n            // 7. TODO: Логировать вход\n            // 8. TODO: Вернуть ответ\n            return this.response.status(200).send({ message: authSuccessMessage.auth, success: true, data: user });\n        });\n    }\n}\n\n\n//# sourceURL=webpack://smart-platform/./src/controllers/api/users-controller.ts?");

/***/ }),

/***/ "./src/controllers/configurator-controller.ts":
/*!****************************************************!*\
  !*** ./src/controllers/configurator-controller.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ConfiguratorController)\n/* harmony export */ });\n/* harmony import */ var _smart_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-controller */ \"./src/controllers/smart-controller.ts\");\n/* harmony import */ var _configs_server_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs/server-config */ \"./src/configs/server-config.ts\");\n/* harmony import */ var _dictionary_connect_dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dictionary/connect-dictionary */ \"./src/dictionary/connect-dictionary.ts\");\n\n\n // словарь переводов\nconst Lang = (0,_dictionary_connect_dictionary__WEBPACK_IMPORTED_MODULE_2__.setDictionary)(_configs_server_config__WEBPACK_IMPORTED_MODULE_1__.default.LANG);\nconst routeTitles = Lang.getRouteTitles();\nclass ConfiguratorController extends _smart_controller__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(request, response) {\n        super(request, response);\n        this.optionsRender = {\n            title: routeTitles.configurator\n        };\n        this.layout = 'configurator.hbs';\n    }\n}\n\n\n//# sourceURL=webpack://smart-platform/./src/controllers/configurator-controller.ts?");

/***/ }),

/***/ "./src/controllers/confirm-email-controller.ts":
/*!*****************************************************!*\
  !*** ./src/controllers/confirm-email-controller.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ConfirmEmailController)\n/* harmony export */ });\n/* harmony import */ var _smart_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-controller */ \"./src/controllers/smart-controller.ts\");\n/* harmony import */ var _models_users_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/users-model */ \"./src/models/users-model.ts\");\n/* harmony import */ var _utils_emitters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/emitters */ \"./src/utils/emitters.ts\");\n/* harmony import */ var _configs_server_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/server-config */ \"./src/configs/server-config.ts\");\n/* harmony import */ var _dictionary_connect_dictionary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dictionary/connect-dictionary */ \"./src/dictionary/connect-dictionary.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n // словарь переводов\nconst Lang = (0,_dictionary_connect_dictionary__WEBPACK_IMPORTED_MODULE_4__.setDictionary)(_configs_server_config__WEBPACK_IMPORTED_MODULE_3__.default.LANG);\nconst routeTitles = Lang.getRouteTitles();\nconst dataBaseErrorMessage = Lang.getDataBaseErrorMessage();\nclass ConfirmEmailController extends _smart_controller__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(request, response) {\n        super(request, response);\n        this.optionsRender = {\n            title: routeTitles.confirmEmail,\n            isConfirmSuccess: false\n        };\n        this.layout = 'confirm-email.hbs';\n    }\n    confirm() {\n        // 1. Проверить найден ли пользователь\n        _models_users_model__WEBPACK_IMPORTED_MODULE_1__.default.findOne({\n            hash: this.request.params.hash,\n            confirmEmail: false\n        })\n            .then((user) => __awaiter(this, void 0, void 0, function* () {\n            // console.log(user)\n            if (user && Array.isArray(user.roles)) {\n                // 2. Если пользователь найден и email не подтвержден, сменить временну роль на постоянную и подтвердить email\n                // @ts-ignore\n                const roles = user.roles.map(role => {\n                    if (role === 'temp-role') {\n                        return 'user';\n                    }\n                });\n                const { ok } = yield new _models_users_model__WEBPACK_IMPORTED_MODULE_1__.default(user).updateOne({\n                    roles,\n                    confirmEmail: true\n                })\n                    .catch(error => _utils_emitters__WEBPACK_IMPORTED_MODULE_2__.default.emit('onError', dataBaseErrorMessage.changeRoleUser, error));\n                if (ok)\n                    this.optionsRender.isConfirmSuccess = true;\n                else\n                    this.optionsRender.isConfirmSuccess = false;\n            }\n            else {\n                // 3. Иначе вернуть ошибку\n                this.optionsRender.isConfirmSuccess = false;\n            }\n            // 4. Отрендерить\n            return this.render();\n        }))\n            .catch(error => _utils_emitters__WEBPACK_IMPORTED_MODULE_2__.default.emit('onError', dataBaseErrorMessage.confirmEmail, error));\n    }\n}\n\n\n//# sourceURL=webpack://smart-platform/./src/controllers/confirm-email-controller.ts?");

/***/ }),

/***/ "./src/controllers/smart-controller.ts":
/*!*********************************************!*\
  !*** ./src/controllers/smart-controller.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SmartController)\n/* harmony export */ });\nclass SmartController {\n    constructor(request, response) {\n        var _a;\n        this.optionsRender = {\n        /**\n         * свойства переданные в рендер\n         * title: '',\n         * layout: '...hbs'\n         * ...\n         * */\n        };\n        this.layout = '';\n        this.request = request;\n        this.response = response;\n        this.objectAccess = (_a = this.request.dataMain) === null || _a === void 0 ? void 0 : _a.accessRoute;\n    }\n    render() {\n        if (!this._checkAccessRoute()) {\n            this.layout = this._checkUseLogin() ? 'login.hbs' : 'access-denied.hbs';\n        }\n        return this.response.status(200).render(this.layout, this.optionsRender);\n    }\n    _checkAccessRoute() {\n        var _a;\n        return (_a = this.objectAccess) === null || _a === void 0 ? void 0 : _a.access;\n    }\n    _checkUseLogin() {\n        var _a;\n        return (_a = this.objectAccess) === null || _a === void 0 ? void 0 : _a.useLogin;\n    }\n}\n\n\n//# sourceURL=webpack://smart-platform/./src/controllers/smart-controller.ts?");

/***/ }),

/***/ "./src/dictionary/connect-dictionary.ts":
/*!**********************************************!*\
  !*** ./src/dictionary/connect-dictionary.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setDictionary\": () => (/* binding */ setDictionary)\n/* harmony export */ });\n/* harmony import */ var _ru__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ru */ \"./src/dictionary/ru.ts\");\n\nconst LANG = {\n    RU: new _ru__WEBPACK_IMPORTED_MODULE_0__.default()\n};\nfunction setDictionary(lang = 'RU') {\n    var _a;\n    return (_a = LANG[lang.toUpperCase()]) !== null && _a !== void 0 ? _a : LANG.RU;\n}\n\n\n//# sourceURL=webpack://smart-platform/./src/dictionary/connect-dictionary.ts?");

/***/ }),

/***/ "./src/dictionary/ru.ts":
/*!******************************!*\
  !*** ./src/dictionary/ru.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ru)\n/* harmony export */ });\n/* harmony import */ var _configs_server_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/server-config */ \"./src/configs/server-config.ts\");\n\nclass Ru {\n    constructor() {\n        this._errorMessage = {\n            server: {\n                notAllowedCORS: '⚡️[server]: Запрещено настройками CORS',\n                notFound: '⚡️[server]: Ресурс не найден',\n                accessDenied: '⚡️[server]: В доступе отказано',\n            },\n            dataBase: {\n                createRoute: '⚡️[DB]: Ошибка при создание записи маршрута: ',\n                connectionOn: '⚡️[DB]: Ошибка подключения к mongodb: ',\n                createRequestLog: '⚡️[DB]: Ошибка при сохранение данных в лог подключения: ',\n                lastTryRegistry: '⚡️[DB]: Ошибка при запросе попследней попытке регистрации: ',\n                createUser: '⚡️[DB]: Ошибка при сохранение данных пользователя: ',\n                searchForUsersByEmail: '⚡️[DB]: Ошибка при запросе поиска пользователей по email: ',\n                checkingPassDuringLogin: '⚡️[DB]: Ошибка при проверки пароля во время логина: ',\n                changeRoleUser: '⚡️[DB]: Ошибка при попытке сменить роль пользователя: ',\n                confirmEmail: '⚡️[DB]: Ошибка при попытке подтвердить email: ',\n                createErrorsLog: '⚡️[DB]: Ошибка при попытке сохранить в БД лог ошибки: ',\n                createEventsLog: '⚡️[DB]: Ошибка во время сохранения лога события: '\n            },\n            auth: {\n                emailExists: 'Указанный email уже зарегистрирован!',\n                emailIsWrong: 'Введите корректный email!',\n                lastTryRegistry: 'Перед повторной регистрацией должно пройти некоторое время!',\n                registry: 'Произошла ошибка во время регистрации!',\n                passwordOrEmailIsWrong: 'Указанный email или пароль не совпадает!'\n            },\n            errors: {\n                sendEmail(to) {\n                    return `Ошибка при отправке email получателю ${to}: `;\n                }\n            }\n        };\n        this._successMessage = {\n            server: {\n                serverIsRunning: `⚡️[server]: Сервер запущен на ${_configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.HOST}:${_configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.PORT}`,\n                serverIsWaiting: `⚡️[server]: Сервер ожидает подключения...`,\n                accessSuccess: '⚡️[server]: Пользователь авторизован!'\n            },\n            dataBase: {\n                createRoute: '⚡️[DB]: Создана запись маршрута: ',\n                connectionOn: '⚡️[DB]: Соединение с mongodb установлено',\n            },\n            auth: {\n                registry: 'Регистрация прошла успешно!',\n                auth: 'Пользователь авторизован!',\n            }\n        };\n        this._eventsName = {\n            registryUser: 'Регистрация пользователя',\n            sendEmail: 'Отправки письма',\n        };\n        this._emailSubjects = {\n            confirmEmail: 'Подтверждение адреса электронной почты'\n        };\n        this._routeTitles = {\n            configurator: 'Конфигуратор',\n            confirmEmail: 'Подтверждение email'\n        };\n        this._emailTemplates = {\n            confirmEmailTemplate(hash = '') {\n                if (!hash)\n                    return ``;\n                return `\n                <h3> Здравствуйте! </h3>\n                <p> Для подтверждения регистрации на сайте www.${_configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.HOST}, перейдите по \n                    <b>\n                        <a \n                            href=\"${_configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.PROTOCOL}://${_configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.HOST}${_configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.PORT\n                    ? ':' + _configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.PORT\n                    : ''}/confirm_email/${hash}\">\n                                ссылке\n                       </a>\n                    </b>. \n                </p>\n                <p> Если Вы не регистрировались на сайте www.${_configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.HOST}, просто проигнорируйте данное письмо.</p>\n            `;\n            }\n        };\n    }\n    // getters\n    getServerSuccessMessage() {\n        return this._successMessage.server;\n    }\n    getServerErrorMessage() {\n        return this._errorMessage.server;\n    }\n    getDataBaseSuccessMessage() {\n        return this._successMessage.dataBase;\n    }\n    getDataBaseErrorMessage() {\n        return this._errorMessage.dataBase;\n    }\n    getAuthErrorMessage() {\n        return this._errorMessage.auth;\n    }\n    getAuthSuccessMessage() {\n        return this._successMessage.auth;\n    }\n    getEventsName() {\n        return this._eventsName;\n    }\n    getEmailSubjects() {\n        return this._emailSubjects;\n    }\n    getRouteTitles() {\n        return this._routeTitles;\n    }\n    getEmailTemplates() {\n        return this._emailTemplates;\n    }\n    getErrorMessage() {\n        return this._errorMessage.errors;\n    }\n}\n\n\n//# sourceURL=webpack://smart-platform/./src/dictionary/ru.ts?");

/***/ }),

/***/ "./src/models/error-logs-model.ts":
/*!****************************************!*\
  !*** ./src/models/error-logs-model.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SchemaErrorLogs = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    date: {\n        type: Date,\n        default: new Date()\n    },\n    textDescription: String,\n    textError: String\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('errorLog', SchemaErrorLogs));\n\n\n//# sourceURL=webpack://smart-platform/./src/models/error-logs-model.ts?");

/***/ }),

/***/ "./src/models/event-logs-model.ts":
/*!****************************************!*\
  !*** ./src/models/event-logs-model.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SchemaEventLogs = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    date: {\n        type: Date,\n        default: new Date()\n    },\n    eventName: String,\n    text: String,\n    user: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n        ref: 'User',\n    },\n    requestIP: String\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('eventLog', SchemaEventLogs));\n\n\n//# sourceURL=webpack://smart-platform/./src/models/event-logs-model.ts?");

/***/ }),

/***/ "./src/models/request-log-model.ts":
/*!*****************************************!*\
  !*** ./src/models/request-log-model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SchemaRequestLogs = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    date: {\n        type: Date,\n        default: new Date()\n    },\n    requestUrl: String,\n    requestMethod: String,\n    requestCookies: Object,\n    requestSignedCookies: Object,\n    requestIP: String,\n    requestID: String,\n    body: Object,\n    params: Object,\n    user: {\n        email: String,\n    },\n    accessRoute: Object\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('requestLog', SchemaRequestLogs));\n\n\n//# sourceURL=webpack://smart-platform/./src/models/request-log-model.ts?");

/***/ }),

/***/ "./src/models/routes-model.ts":
/*!************************************!*\
  !*** ./src/models/routes-model.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n // библиотека для подключение к mongodb\nconst SchemaRoutes = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    date: {\n        type: Date,\n        default: new Date()\n    },\n    updatedAt: {\n        type: Date,\n        required: true,\n    },\n    url: {\n        type: String,\n        required: true,\n        index: true\n    },\n    roleAccessSuccess: Array,\n    roleAccessDenied: Array,\n    userAccessSuccess: Array,\n    userAccessDenied: Array,\n});\nSchemaRoutes.index({ url: 1 });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('routes', SchemaRoutes));\n\n\n//# sourceURL=webpack://smart-platform/./src/models/routes-model.ts?");

/***/ }),

/***/ "./src/models/users-model.ts":
/*!***********************************!*\
  !*** ./src/models/users-model.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n // библиотека для подключение к mongodb\n\nconst SchemaUsers = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    date: {\n        type: Date,\n        default: new Date()\n    },\n    updatedAt: {\n        type: Date,\n        required: true,\n    },\n    mainEmail: {\n        type: String,\n        required: true,\n        index: true,\n        unique: true\n    },\n    confirmEmail: {\n        type: Boolean,\n        default: false\n    },\n    hash: String,\n    emails: [\n        {\n            value: String,\n            confirm: Boolean\n        }\n    ],\n    password: {\n        type: String,\n        required: true\n    },\n    name: String,\n    lastName: String,\n    patronymic: String,\n    addresses: [{\n            country: String,\n            city: String,\n            street: String,\n            houseNumber: String,\n            apartmentNumber: String\n        }],\n    phones: [String],\n    roles: [String]\n});\nSchemaUsers.index({ mainEmail: 1 });\nSchemaUsers.pre('save', function (next) {\n    // хеширование пароля перед сохранением\n    if (!this.isModified(\"password\"))\n        return next();\n    console.log(this.password, this);\n    this.password = bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hashSync(this.password, 10);\n    next();\n});\n// Метод для проверки пароля\nSchemaUsers.methods.comparePassword = function (plaintext = '', callback) {\n    return callback(null, bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compareSync(plaintext, this.password));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('users', SchemaUsers));\n\n\n//# sourceURL=webpack://smart-platform/./src/models/users-model.ts?");

/***/ }),

/***/ "./src/routers/api/users-api-router.ts":
/*!*********************************************!*\
  !*** ./src/routers/api/users-api-router.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_api_users_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/api/users-controller */ \"./src/controllers/api/users-controller.ts\");\n\n\nconst usersApiRouters = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nusersApiRouters.post('/registration', (request, response) => new _controllers_api_users_controller__WEBPACK_IMPORTED_MODULE_1__.default(request, response).registrationWithEmail());\nusersApiRouters.post('/login', (request, response) => new _controllers_api_users_controller__WEBPACK_IMPORTED_MODULE_1__.default(request, response).loginWithEmail());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usersApiRouters);\n\n\n//# sourceURL=webpack://smart-platform/./src/routers/api/users-api-router.ts?");

/***/ }),

/***/ "./src/routers/configurator-router.ts":
/*!********************************************!*\
  !*** ./src/routers/configurator-router.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_configurator_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/configurator-controller */ \"./src/controllers/configurator-controller.ts\");\n\n\nconst configuratorRouter = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nconfiguratorRouter.get('/', (request, response) => new _controllers_configurator_controller__WEBPACK_IMPORTED_MODULE_1__.default(request, response).render());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (configuratorRouter);\n\n\n//# sourceURL=webpack://smart-platform/./src/routers/configurator-router.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/app.ts\");\n/* harmony import */ var _configs_server_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configs/server-config */ \"./src/configs/server-config.ts\");\n/* harmony import */ var _dictionary_connect_dictionary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dictionary/connect-dictionary */ \"./src/dictionary/connect-dictionary.ts\");\n/* harmony import */ var _models_routes_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/routes-model */ \"./src/models/routes-model.ts\");\n/* harmony import */ var _utils_emitters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/emitters */ \"./src/utils/emitters.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n // библиотека для подключение к mongodb\n // файл инициализации приложения\n\n // словарь переводов\n// models\n\n// emitters\n\nconst Lang = (0,_dictionary_connect_dictionary__WEBPACK_IMPORTED_MODULE_3__.setDictionary)(_configs_server_config__WEBPACK_IMPORTED_MODULE_2__.default.LANG);\nconst serverSuccessMessage = Lang.getServerSuccessMessage();\nconst dataBaseSuccessMessage = Lang.getDataBaseSuccessMessage();\nconst dataBaseErrorMessage = Lang.getDataBaseErrorMessage();\nconst checkFindRecord = (model) => (param) => model.findOne(param); // возвращает найденную запись\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(_configs_server_config__WEBPACK_IMPORTED_MODULE_2__.default.connect.URL, {\n    useUnifiedTopology: true,\n    useNewUrlParser: true,\n    useCreateIndex: true\n})\n    .then(() => {\n    // 1. Логируем подключение к БД\n    console.log(dataBaseSuccessMessage.connectionOn);\n    // 2. Создаем первичные записи маршрутов\n    const checkRoute = checkFindRecord(_models_routes_model__WEBPACK_IMPORTED_MODULE_4__.default);\n    const routeRecord = [];\n    routeRecord.push({\n        url: '/configurator',\n        updatedAt: new Date(),\n    });\n    routeRecord.forEach((record) => __awaiter(void 0, void 0, void 0, function* () {\n        if (!(yield checkRoute({ url: record.url }))) { // маршрут не найден\n            new _models_routes_model__WEBPACK_IMPORTED_MODULE_4__.default(record).save(error => {\n                if (error)\n                    return _utils_emitters__WEBPACK_IMPORTED_MODULE_5__.default.emit('onError', dataBaseErrorMessage.createRoute, error);\n                console.log(dataBaseSuccessMessage.createRoute, record);\n            });\n        }\n    }));\n    // 3. Включаем прослушивание порта\n    _app__WEBPACK_IMPORTED_MODULE_1__.default.listen(_configs_server_config__WEBPACK_IMPORTED_MODULE_2__.default.address.PORT, () => {\n        console.log(serverSuccessMessage.serverIsRunning);\n        console.log(serverSuccessMessage.serverIsWaiting);\n    });\n})\n    .catch(error => console.error(dataBaseErrorMessage.connectionOn, error));\n\n\n//# sourceURL=webpack://smart-platform/./src/server.ts?");

/***/ }),

/***/ "./src/utils/emitters.ts":
/*!*******************************!*\
  !*** ./src/utils/emitters.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ \"events\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mailer */ \"./src/utils/mailer.ts\");\n/* harmony import */ var _models_error_logs_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/error-logs-model */ \"./src/models/error-logs-model.ts\");\n/* harmony import */ var _models_event_logs_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/event-logs-model */ \"./src/models/event-logs-model.ts\");\n/* harmony import */ var _configs_server_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../configs/server-config */ \"./src/configs/server-config.ts\");\n/* harmony import */ var _dictionary_connect_dictionary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dictionary/connect-dictionary */ \"./src/dictionary/connect-dictionary.ts\");\n\n\n\n\n\n\n // словарь переводов\nconst Lang = (0,_dictionary_connect_dictionary__WEBPACK_IMPORTED_MODULE_6__.setDictionary)(_configs_server_config__WEBPACK_IMPORTED_MODULE_5__.default.LANG);\nconst serverSuccessMessage = Lang.getServerSuccessMessage();\nconst dataBaseErrorMessage = Lang.getDataBaseErrorMessage();\nconst eventsName = Lang.getEventsName();\nconst serverErrorMessage = Lang.getServerErrorMessage();\nconst authErrorMessage = Lang.getAuthErrorMessage();\nconst authSuccessMessage = Lang.getAuthSuccessMessage();\nconst emailSubjects = Lang.getEmailSubjects();\nconst emailTemplates = Lang.getEmailTemplates();\nconst errorsMessage = Lang.getErrorMessage();\n// Создаем экземпляр слушателя событий\nclass Emitter extends (events__WEBPACK_IMPORTED_MODULE_0___default()) {\n}\nconst events = new Emitter();\n// mail\nconst sendMail = (to, subject, html, request) => {\n    // console.log(`to: ${to}, subject: ${subject}, html: ${html}`)\n    (0,_mailer__WEBPACK_IMPORTED_MODULE_2__.default)(to, subject, html)\n        .then(() => {\n        events.emit('saveEventLogs', eventsName.sendEmail, `to: ${to}, subject: ${subject}, html: ${html}`, request);\n    })\n        .catch(error => events.emit('onError', errorsMessage.sendEmail(to), error));\n};\n// log error\nconst logError = (textDescription, textError) => {\n    new _models_error_logs_model__WEBPACK_IMPORTED_MODULE_3__.default({ textDescription, textError }).save(error => {\n        if (error)\n            console.error(dataBaseErrorMessage.createErrorsLog, error);\n    });\n    console.error('⚡️[server]:', textDescription, textError);\n};\n// log events\nconst logEvents = (eventName, text, request) => {\n    var _a, _b, _c;\n    // console.log('dm', request)\n    new _models_event_logs_model__WEBPACK_IMPORTED_MODULE_4__.default({\n        eventName,\n        text,\n        requestIP: ((_a = request === null || request === void 0 ? void 0 : request.dataMain) === null || _a === void 0 ? void 0 : _a.requestIP) || '',\n        user: mongoose__WEBPACK_IMPORTED_MODULE_1___default().Types.ObjectId(((_c = (_b = request === null || request === void 0 ? void 0 : request.dataMain) === null || _b === void 0 ? void 0 : _b.user) === null || _c === void 0 ? void 0 : _c._id) || 0)\n    }).save(error => {\n        if (error)\n            events.emit('onError', dataBaseErrorMessage.createErrorsLog, error);\n    });\n};\n// listeners\nevents.on('sendMail', sendMail); // Связываем слушатель событий и функцию\nevents.on('onError', logError);\nevents.on('saveEventLogs', logEvents);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);\n\n\n//# sourceURL=webpack://smart-platform/./src/utils/emitters.ts?");

/***/ }),

/***/ "./src/utils/generators.ts":
/*!*********************************!*\
  !*** ./src/utils/generators.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomKeyGenerator\": () => (/* binding */ randomKeyGenerator)\n/* harmony export */ });\nfunction randomKeyGenerator() {\n    // Генератор случайного хеша\n    const letters = 'abcdefghijklmnopqrstuvwxyz0123456789';\n    let word = '';\n    for (let i = 0; i < 15; i++) {\n        word += letters.charAt(Math.floor(Math.random() * letters.length));\n    }\n    const randomKey = word.substr(0, 5) + '-' + word.substr(5, 5) + '-' + word.substr(10, 5);\n    return randomKey.toUpperCase();\n}\n\n\n//# sourceURL=webpack://smart-platform/./src/utils/generators.ts?");

/***/ }),

/***/ "./src/utils/is-type.ts":
/*!******************************!*\
  !*** ./src/utils/is-type.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isNumber\": () => (/* binding */ isNumber)\n/* harmony export */ });\nfunction isNumber(value = '') {\n    return typeof value === 'number' && isFinite(value);\n}\n\n\n\n//# sourceURL=webpack://smart-platform/./src/utils/is-type.ts?");

/***/ }),

/***/ "./src/utils/mailer.ts":
/*!*****************************!*\
  !*** ./src/utils/mailer.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _configs_mailer_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs/mailer-config */ \"./src/configs/mailer-config.ts\");\n\n\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n    port: 587,\n    secure: true,\n    service: 'gmail',\n    auth: {\n        user: 'reports.sti.mailer@gmail.com',\n        pass: 'neosjhdbhJHJHf34f'\n    }\n});\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(to, subject, html) {\n    return transporter.sendMail({\n        from: _configs_mailer_config__WEBPACK_IMPORTED_MODULE_1__.MAILER_FROM,\n        to,\n        subject,\n        html\n    });\n}\n\n\n//# sourceURL=webpack://smart-platform/./src/utils/mailer.ts?");

/***/ }),

/***/ "./src/utils/validate.ts":
/*!*******************************!*\
  !*** ./src/utils/validate.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"testEmail\": () => (/* binding */ testEmail)\n/* harmony export */ });\nfunction testEmail(email = '') {\n    const reg = /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,24}))$/;\n    return reg.test(email);\n}\n\n\n\n//# sourceURL=webpack://smart-platform/./src/utils/validate.ts?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");;

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");;

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");;

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");;

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "express-handlebars":
/*!*************************************!*\
  !*** external "express-handlebars" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-handlebars");;

/***/ }),

/***/ "hbs":
/*!**********************!*\
  !*** external "hbs" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("hbs");;

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");;

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.ts");
/******/ 	
/******/ })()
;