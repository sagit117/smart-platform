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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var hbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hbs */ \"hbs\");\n/* harmony import */ var express_handlebars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! express-handlebars */ \"express-handlebars\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var _configs_server_config_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./configs/server-config.js */ \"./src/configs/server-config.js\");\n/* harmony import */ var _models_users_model_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./models/users-model.js */ \"./src/models/users-model.js\");\n/* harmony import */ var _models_routes_model_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./models/routes-model.js */ \"./src/models/routes-model.js\");\n/* harmony import */ var _models_request_log_model_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./models/request-log-model.js */ \"./src/models/request-log-model.js\");\n/* harmony import */ var _routers_configurator_router_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routers/configurator-router.js */ \"./src/routers/configurator-router.js\");\n/* harmony import */ var _routers_api_users_api_router_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routers/api/users-api-router.js */ \"./src/routers/api/users-api-router.js\");\n/* harmony import */ var _utils_is_type_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/is-type.js */ \"./src/utils/is-type.js\");\n/* harmony import */ var _utils_emitters_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils/emitters.js */ \"./src/utils/emitters.js\");\n/* harmony import */ var _controllers_confirm_email_controller_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./controllers/confirm-email-controller.js */ \"./src/controllers/confirm-email-controller.js\");\n\n\n\n\n\n\n\n\n\n\n // config\n\n // models\n\n\n\n // routers\n\n\n // utils\n\n // emitters\n\n // controllers\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_2__(); // создаем экземпляр експресс\n// настройка hbs, helpers\n\napp.engine(\"hbs\", express_handlebars__WEBPACK_IMPORTED_MODULE_6__({\n  layoutsDir: \"build-server/views/layouts\",\n  defaultLayout: \"main-layout\",\n  extname: \"hbs\",\n  helpers: {}\n}));\napp.set(\"view engine\", \"hbs\");\nhbs__WEBPACK_IMPORTED_MODULE_5__.registerPartials(\"/partials\"); // статика\n\napp.use(express__WEBPACK_IMPORTED_MODULE_2__.static(\"build-server/dist\"));\napp.use(express__WEBPACK_IMPORTED_MODULE_2__.static(\"build-server/public/css\")); // защита сервера\n\napp.use(helmet__WEBPACK_IMPORTED_MODULE_7__()); // настройка helmet\n\napp.use(helmet__WEBPACK_IMPORTED_MODULE_7__.contentSecurityPolicy({\n  directives: {\n    defaultSrc: [\"'self'\"],\n    scriptSrc: [\"'self'\", \"'unsafe-eval'\"],\n    styleSrc: [\"'self'\", \"'unsafe-inline'\", 'fonts.googleapis.com', 'fonts.gstatic.com'],\n    fontSrc: [\"'self'\", 'fonts.googleapis.com', 'fonts.gstatic.com']\n  }\n})); // app.use(helmet.referrerPolicy({\n//   policy: [\"origin\"],\n// }))\n// настройка CORS\n\nvar whitelist = [_configs_server_config_js__WEBPACK_IMPORTED_MODULE_11__.default.address.PROTOCOL + \"://\" + _configs_server_config_js__WEBPACK_IMPORTED_MODULE_11__.default.address.HOST + ':' + _configs_server_config_js__WEBPACK_IMPORTED_MODULE_11__.default.address.PORT];\nvar corsOptions = {\n  origin: function origin(_origin, callback) {\n    if (whitelist.indexOf(_origin) !== -1 || !_origin || _origin === 'null') {\n      return callback(null, true);\n    } else {\n      console.log(_origin);\n      return callback(new Error('Not allowed by CORS'));\n    }\n  },\n  optionsSuccessStatus: 200\n};\napp.use(cors__WEBPACK_IMPORTED_MODULE_8__(corsOptions)); // сжатие\n\napp.use(compression__WEBPACK_IMPORTED_MODULE_9__()); // парсеры\n\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3__(_configs_server_config_js__WEBPACK_IMPORTED_MODULE_11__.default.secure.KEY_FOR_COOKIE)); // Передаем строку шифрования для cookie\n\nvar urlencodedParser = body_parser__WEBPACK_IMPORTED_MODULE_10__.urlencoded({\n  limit: '50mb',\n  extended: false,\n  parameterLimit: 50000\n}); // чтение данных из форм\n\nvar jsonParser = body_parser__WEBPACK_IMPORTED_MODULE_10__.json({\n  limit: '50mb'\n}); // чтение данных из json\n\napp.use(urlencodedParser);\napp.use(jsonParser); // middleware function\n\napp.use(onRequest); // routes\n\napp.use('/configurator', _routers_configurator_router_js__WEBPACK_IMPORTED_MODULE_15__.default);\napp.get('/confirm_email/:hash', function (request, response) {\n  // подтверждение email\n  return new _controllers_confirm_email_controller_js__WEBPACK_IMPORTED_MODULE_19__.default(request, response).confirm();\n}); // routers API\n\napp.use('/api/users', _routers_api_users_api_router_js__WEBPACK_IMPORTED_MODULE_16__.default); // обработка не существующего маршрута\n\napp.use(function (request, response) {\n  var _request$dataMain, _request$dataMain$use;\n\n  // not found\n  console.log('Not Found', request.method, request.originalUrl, 'user:', (_request$dataMain = request.dataMain) === null || _request$dataMain === void 0 ? void 0 : (_request$dataMain$use = _request$dataMain.user) === null || _request$dataMain$use === void 0 ? void 0 : _request$dataMain$use.email);\n  response.status(404).send(\"Not Found\");\n}); // Вспомогательные функции\n\nfunction onRequest(_x, _x2, _x3) {\n  return _onRequest.apply(this, arguments);\n}\n\nfunction _onRequest() {\n  _onRequest = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__.mark(function _callee(request, response, next) {\n    var _clientInfo$requestSi, _clientInfo$requestSi2;\n\n    var getClientInfo, clientInfo, token, getUser, user, getRoutes, route, checkAccess;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // 1. Собрать данные о подключение\n            getClientInfo = function getClientInfo() {\n              return {\n                date: new Date(),\n                requestUrl: request.url,\n                requestMethod: request.method,\n                requestCookies: request.cookies,\n                requestSignedCookies: request.signedCookies,\n                requestIP: request.ip,\n                body: request.body,\n                params: request.params\n              };\n            };\n\n            clientInfo = getClientInfo(); // 2. Проверить пользователя\n\n            token = (_clientInfo$requestSi = clientInfo.requestSignedCookies) !== null && _clientInfo$requestSi !== void 0 && _clientInfo$requestSi.token ? jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__.verify((_clientInfo$requestSi2 = clientInfo.requestSignedCookies) === null || _clientInfo$requestSi2 === void 0 ? void 0 : _clientInfo$requestSi2.token, _configs_server_config_js__WEBPACK_IMPORTED_MODULE_11__.default.secure.KEY_FOR_JWT) : false; // console.log(token)\n\n            getUser = function getUser() {\n              var email = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n              return _models_users_model_js__WEBPACK_IMPORTED_MODULE_12__.default.findOne({\n                mainEmail: email\n              });\n            };\n\n            _context.next = 6;\n            return getUser(token.email);\n\n          case 6:\n            user = _context.sent;\n            // console.log(user)\n            Object.assign(clientInfo, {\n              user: user !== null && user !== void 0 ? user : {}\n            }); // записываем данные пользователя в clientInfo\n            // 3. Проверить доступ к маршруту\n\n            getRoutes = function getRoutes() {\n              var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n              var requestUrl = url.split('?'); // игнорируем параметры переданные после знака '?'\n\n              var urls = requestUrl[0].split('/');\n              /** если последний элемент в маршруте число, сохраняем его как '*'\n               * так как это параметр маршрута\n               */\n\n              var lastValue = urls.pop();\n              urls.push((0,_utils_is_type_js__WEBPACK_IMPORTED_MODULE_17__.isNumber)(lastValue) ? '*' : lastValue);\n              return _models_routes_model_js__WEBPACK_IMPORTED_MODULE_13__.default.findOne({\n                url: urls.join('/')\n              });\n            };\n\n            _context.next = 11;\n            return getRoutes(clientInfo.requestUrl);\n\n          case 11:\n            route = _context.sent;\n\n            // маршрут из базы | null\n            checkAccess = function checkAccess() {\n              var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n                roleAccessSuccess: [],\n                userAccessSuccess: [],\n                roleAccessDenied: [],\n                userAccessDenied: []\n              };\n              var user = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n              var denied = [];\n\n              var checkDeniedAccess = function checkDeniedAccess() {\n                var arrayAccess = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n                return function () {\n                  var arrayRoles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n                  if (arrayAccess.length) return arrayRoles.length ? arrayRoles.filter(function (role) {\n                    return arrayAccess.includes(role);\n                  }).length > 0 : false;\n                  return false;\n                };\n              };\n\n              var checkSuccessAccess = function checkSuccessAccess() {\n                var arrayAccess = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n                return function () {\n                  var arrayRoles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n                  // console.log(arrayRoles, arrayAccess, arrayRoles.filter(role => arrayAccess.includes(role)).length === 0)\n                  if (arrayAccess.length) return arrayRoles.length ? arrayRoles.filter(function (role) {\n                    return arrayAccess.includes(role);\n                  }).length === 0 : true;\n                  return false;\n                };\n              };\n\n              denied.push(checkSuccessAccess(route === null || route === void 0 ? void 0 : route.roleAccessSuccess)(user === null || user === void 0 ? void 0 : user.roles), checkSuccessAccess(route === null || route === void 0 ? void 0 : route.userAccessSuccess)([user === null || user === void 0 ? void 0 : user.mainEmail]), checkDeniedAccess(route === null || route === void 0 ? void 0 : route.roleAccessDenied)(user === null || user === void 0 ? void 0 : user.roles), checkDeniedAccess(route === null || route === void 0 ? void 0 : route.userAccessDenied)([user === null || user === void 0 ? void 0 : user.mainEmail])); // console.log(denied)\n              // console.log('result:', {access: !denied.reduce((acc, value) => acc + value), useLogin: !user.mainEmail})\n              // useLogin - параметр, который говорит системе, что необходимо в начале пройти логин\n\n              return {\n                access: !denied.reduce(function (acc, value) {\n                  return acc + value;\n                }),\n                useLogin: !user.mainEmail\n              };\n            }; // записываем в clientInfo данные о доступности маршрута\n            // console.log(clientInfo, route)\n\n\n            Object.assign(clientInfo, {\n              accessRoute: checkAccess(route, clientInfo.user)\n            }); // 4. Залогировать подключение\n\n            new _models_request_log_model_js__WEBPACK_IMPORTED_MODULE_14__.default(clientInfo).save(function (error) {\n              if (error) _utils_emitters_js__WEBPACK_IMPORTED_MODULE_18__.default.emit('onError', 'Ошибка при сохранение данных в лог подключения: ', error);\n            }); // 5. Записать данные подключения в request\n\n            request.dataMain = clientInfo; // передаем управление следующему middleware\n\n            next();\n\n          case 17:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _onRequest.apply(this, arguments);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://smart-platform/./src/app.js?");

/***/ }),

/***/ "./src/configs/limits-config.js":
/*!**************************************!*\
  !*** ./src/configs/limits-config.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  limitTimeOfRegistration: 1 // min\n\n});\n\n//# sourceURL=webpack://smart-platform/./src/configs/limits-config.js?");

/***/ }),

/***/ "./src/configs/mailer-config.js":
/*!**************************************!*\
  !*** ./src/configs/mailer-config.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MAILER_FROM\": () => (/* binding */ MAILER_FROM)\n/* harmony export */ });\nvar MAILER_FROM = 'reports.sti.mailer@gmail.com';\n\n\n//# sourceURL=webpack://smart-platform/./src/configs/mailer-config.js?");

/***/ }),

/***/ "./src/configs/server-config.js":
/*!**************************************!*\
  !*** ./src/configs/server-config.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  address: {\n    HOST:  false ? 0 : 'localhost',\n    // TODO: поменять на продакшене\n    PORT: 3333,\n    PROTOCOL: 'http'\n  },\n  secure: {\n    KEY_FOR_COOKIE: 'shop4secure-token-for-cookies',\n    KEY_FOR_JWT: 'shop4secure-token-for-jwt'\n  },\n  connect: {\n    // связь с монго ДБ\n    URL: 'mongodb://localhost:27017/smart_shop'\n  },\n  cookie: {\n    COOKIE_SECURE: false // false - http || true - https\n\n  }\n});\n\n//# sourceURL=webpack://smart-platform/./src/configs/server-config.js?");

/***/ }),

/***/ "./src/controllers/api/smart-api-controller.js":
/*!*****************************************************!*\
  !*** ./src/controllers/api/smart-api-controller.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SmartApiController)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n\n\n\nvar SmartApiController = /*#__PURE__*/function () {\n  function SmartApiController(request, response) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, SmartApiController);\n\n    this.request = request;\n    this.response = response;\n    this.objectAccess = this.request.dataMain.accessRoute;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__(SmartApiController, [{\n    key: \"errorHandler\",\n    value: function errorHandler() {\n      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'access denied';\n      return this.response.status(403).send({\n        message: message,\n        success: false\n      });\n    }\n  }]);\n\n  return SmartApiController;\n}();\n\n\n\n//# sourceURL=webpack://smart-platform/./src/controllers/api/smart-api-controller.js?");

/***/ }),

/***/ "./src/controllers/api/users-controller.js":
/*!*************************************************!*\
  !*** ./src/controllers/api/users-controller.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UsersApiController)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _smart_api_controller_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./smart-api-controller.js */ \"./src/controllers/api/smart-api-controller.js\");\n/* harmony import */ var _models_event_logs_model_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/event-logs-model.js */ \"./src/models/event-logs-model.js\");\n/* harmony import */ var _models_users_model_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/users-model.js */ \"./src/models/users-model.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var _configs_limits_config_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../configs/limits-config.js */ \"./src/configs/limits-config.js\");\n/* harmony import */ var _utils_validate_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/validate.js */ \"./src/utils/validate.js\");\n/* harmony import */ var _templates_emails_templates_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../templates/emails-templates.js */ \"./src/templates/emails-templates.js\");\n/* harmony import */ var _utils_emitters_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/emitters.js */ \"./src/utils/emitters.js\");\n/* harmony import */ var _utils_generators_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/generators.js */ \"./src/utils/generators.js\");\n/* harmony import */ var _configs_server_config_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../configs/server-config.js */ \"./src/configs/server-config.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\n\n\nvar UsersApiController = /*#__PURE__*/function (_SmartApiController) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__(UsersApiController, _SmartApiController);\n\n  var _super = _createSuper(UsersApiController);\n\n  function UsersApiController(request, response) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__(this, UsersApiController);\n\n    return _super.call(this, request, response);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__(UsersApiController, [{\n    key: \"registrationWithEmail\",\n    value: function () {\n      var _registrationWithEmail = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__.mark(function _callee() {\n        var data, getUserWithEmail, getLastTryRegistration, records, delta, hash, user, isSave;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                /* регистрация пользователя по email\n                 * data = { email, password }\n                 **/\n                // TODO: если пользователь авторизован, повторную регистрацию не проводить\n                console.log(this.request.dataMain);\n                data = this.request.dataMain.body; // 1. Проверить анти-спам поле\n\n                if (!data.antiSpam) {\n                  _context.next = 4;\n                  break;\n                }\n\n                return _context.abrupt(\"return\", this.errorHandler('В доступе отказано'));\n\n              case 4:\n                if ((0,_utils_validate_js__WEBPACK_IMPORTED_MODULE_12__.testEmail)(data.email)) {\n                  _context.next = 6;\n                  break;\n                }\n\n                return _context.abrupt(\"return\", this.errorHandler('Введите корректный email'));\n\n              case 6:\n                // 3. Проверить на существование email\n                getUserWithEmail = function getUserWithEmail(email) {\n                  return _models_users_model_js__WEBPACK_IMPORTED_MODULE_9__.default.findOne({\n                    $or: [{\n                      mainEmail: email\n                    }, {\n                      \"emails.value\": email\n                    }]\n                  })[\"catch\"](function (error) {\n                    return _utils_emitters_js__WEBPACK_IMPORTED_MODULE_14__.default.emit('onError', 'Ошибка при запросе поиска пользователей по email: ', error);\n                  });\n                };\n\n                _context.next = 9;\n                return getUserWithEmail(data.email);\n\n              case 9:\n                if (!_context.sent) {\n                  _context.next = 11;\n                  break;\n                }\n\n                return _context.abrupt(\"return\", this.errorHandler('Указанный email уже зарегистрирован'));\n\n              case 11:\n                // 4. Проверить количество попыток регистрации с IP за указанное время\n                getLastTryRegistration = function getLastTryRegistration(IP) {\n                  return _models_event_logs_model_js__WEBPACK_IMPORTED_MODULE_8__.default.find({\n                    eventName: 'Регистрация пользователя',\n                    requestIP: IP\n                  }).sort({\n                    date: -1,\n                    _id: -1\n                  }).limit(2)[\"catch\"](function (error) {\n                    return _utils_emitters_js__WEBPACK_IMPORTED_MODULE_14__.default.emit('onError', 'Ошибка при запросе попследней попытке регистрации: ', error);\n                  });\n                };\n\n                _context.next = 14;\n                return getLastTryRegistration(this.request.dataMain.requestIP);\n\n              case 14:\n                _context.t0 = _context.sent;\n\n                if (_context.t0) {\n                  _context.next = 17;\n                  break;\n                }\n\n                _context.t0 = [];\n\n              case 17:\n                records = _context.t0;\n\n                if (!(records.length === 2)) {\n                  _context.next = 22;\n                  break;\n                }\n\n                delta = new Date() - new Date(records[1].date); // console.log(delta, new Date(), new Date(records[1].date), delta / 1000 / 60)\n\n                if (!(delta / 1000 / 60 < _configs_limits_config_js__WEBPACK_IMPORTED_MODULE_11__.default.limitTimeOfRegistration)) {\n                  _context.next = 22;\n                  break;\n                }\n\n                return _context.abrupt(\"return\", this.errorHandler('Перед повторной регистрацией должно пройти некоторое время'));\n\n              case 22:\n                // 5. Создать запись\n                hash = (0,_utils_generators_js__WEBPACK_IMPORTED_MODULE_15__.randomKeyGenerator)(); // хеш для подтверждения email\n\n                user = new _models_users_model_js__WEBPACK_IMPORTED_MODULE_9__.default({\n                  mainEmail: data.email,\n                  password: data.password,\n                  // шифрование пароля происходит в моделе\n                  updatedAt: new Date(),\n                  hash: hash,\n                  roles: ['temp-role']\n                });\n                isSave = user.save(function (error) {\n                  if (error) {\n                    _utils_emitters_js__WEBPACK_IMPORTED_MODULE_14__.default.emit('onError', 'Ошибка при сохранение данных пользователя: ', error);\n                    return false;\n                  }\n                });\n\n                if (isSave) {\n                  _context.next = 27;\n                  break;\n                }\n\n                return _context.abrupt(\"return\", this.errorHandler('Произошла ошибка во время регистрации'));\n\n              case 27:\n                // 6. Выслать письмо для подтверждения email\n                _utils_emitters_js__WEBPACK_IMPORTED_MODULE_14__.default.emit('sendMail', data.email, 'Подтверждение адреса электронной почты', (0,_templates_emails_templates_js__WEBPACK_IMPORTED_MODULE_13__.confirmEmailTemplate)(hash), this.request); // 7. Логировать event\n\n                this.request.dataMain.user = user;\n                _utils_emitters_js__WEBPACK_IMPORTED_MODULE_14__.default.emit('saveEventLogs', 'Регистрация пользователя', data.email, this.request); // 8. Выслать ответ\n\n                return _context.abrupt(\"return\", this.response.status(200).send({\n                  message: 'Регистрация прошла успешно',\n                  success: true,\n                  data: {\n                    email: data.email\n                  }\n                }));\n\n              case 31:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function registrationWithEmail() {\n        return _registrationWithEmail.apply(this, arguments);\n      }\n\n      return registrationWithEmail;\n    }()\n  }, {\n    key: \"loginWithEmail\",\n    value: function () {\n      var _loginWithEmail = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__.mark(function _callee2() {\n        var data, getUserWithEmail, user, isLoginSuccess, date, jwt;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                /* логин пользователя по email\n                 * data = { email, password }\n                 **/\n                // TODO: если пользователь авторизован, повторную авторизацию не проводить\n                console.log(this.request.dataMain);\n                data = this.request.dataMain.body; // 1. Проверить анти-спам поле\n\n                if (!data.antiSpam) {\n                  _context2.next = 4;\n                  break;\n                }\n\n                return _context2.abrupt(\"return\", this.errorHandler('В доступе отказано'));\n\n              case 4:\n                // 2. Проверить на существование email\n                getUserWithEmail = function getUserWithEmail(email) {\n                  return _models_users_model_js__WEBPACK_IMPORTED_MODULE_9__.default.findOne({\n                    mainEmail: email\n                  })[\"catch\"](function (error) {\n                    return _utils_emitters_js__WEBPACK_IMPORTED_MODULE_14__.default.emit('onError', 'Ошибка при запросе поиска пользователей по email: ', error);\n                  });\n                };\n\n                _context2.next = 7;\n                return getUserWithEmail(data.email);\n\n              case 7:\n                user = _context2.sent;\n\n                if (user) {\n                  _context2.next = 10;\n                  break;\n                }\n\n                return _context2.abrupt(\"return\", this.errorHandler('Указанный email или пароль не совпадает'));\n\n              case 10:\n                // 3. Проверить пароль\n                isLoginSuccess = user.comparePassword(data.password, function (error, match) {\n                  if (!match) return false;\n\n                  if (error) {\n                    _utils_emitters_js__WEBPACK_IMPORTED_MODULE_14__.default.emit('onError', 'Ошибка при проверки пароля во время логина: ', error);\n                    return false;\n                  }\n\n                  return true;\n                });\n\n                if (isLoginSuccess) {\n                  _context2.next = 13;\n                  break;\n                }\n\n                return _context2.abrupt(\"return\", this.errorHandler('Указанный email или пароль не совпадает'));\n\n              case 13:\n                // 4. Установить куки\n                date = new Date();\n                date.setDate(date.getDate() + 30);\n                jwt = jsonwebtoken__WEBPACK_IMPORTED_MODULE_10__.sign({\n                  email: user.mainEmail,\n                  id: user._id,\n                  exp: date.getTime()\n                }, _configs_server_config_js__WEBPACK_IMPORTED_MODULE_16__.default.secure.KEY_FOR_JWT);\n                this.response.cookie('token', jwt, {\n                  maxAge: 1000 * 60 * 60 * 24 * 30,\n                  secure: _configs_server_config_js__WEBPACK_IMPORTED_MODULE_16__.default.cookie.COOKIE_SECURE,\n                  httpOnly: true,\n                  signed: true,\n                  domain: _configs_server_config_js__WEBPACK_IMPORTED_MODULE_16__.default.address.HOST,\n                  sameSite: \"lax\"\n                }); // 5. TODO: Выслать подтверждение на email\n\n                console.log(this.request.dataMain); // 6. TODO: Логировать вход\n                // 7. TODO: Вернуть ответ\n\n                return _context2.abrupt(\"return\", this.response.status(200).send({\n                  message: 'Вход в систему прошел успешно',\n                  success: true,\n                  data: user\n                }));\n\n              case 19:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function loginWithEmail() {\n        return _loginWithEmail.apply(this, arguments);\n      }\n\n      return loginWithEmail;\n    }()\n  }]);\n\n  return UsersApiController;\n}(_smart_api_controller_js__WEBPACK_IMPORTED_MODULE_7__.default);\n\n\n\n//# sourceURL=webpack://smart-platform/./src/controllers/api/users-controller.js?");

/***/ }),

/***/ "./src/controllers/configurator-controller.js":
/*!****************************************************!*\
  !*** ./src/controllers/configurator-controller.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ConfiguratorController)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _smart_controller_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./smart-controller.js */ \"./src/controllers/smart-controller.js\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n // import configurator from '../../views/configurator.hbs'\n\nvar ConfiguratorController = /*#__PURE__*/function (_SmartController) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__(ConfiguratorController, _SmartController);\n\n  var _super = _createSuper(ConfiguratorController);\n\n  function ConfiguratorController(request, response) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, ConfiguratorController);\n\n    _this = _super.call(this, request, response);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__(_this), \"optionsRender\", {\n      title: 'Конфигуратор'\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__(_this), \"layout\", 'configurator.hbs');\n\n    return _this;\n  }\n\n  return ConfiguratorController;\n}(_smart_controller_js__WEBPACK_IMPORTED_MODULE_6__.default);\n\n\n\n//# sourceURL=webpack://smart-platform/./src/controllers/configurator-controller.js?");

/***/ }),

/***/ "./src/controllers/confirm-email-controller.js":
/*!*****************************************************!*\
  !*** ./src/controllers/confirm-email-controller.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ConfirmEmailController)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _smart_controller_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./smart-controller.js */ \"./src/controllers/smart-controller.js\");\n/* harmony import */ var _models_users_model_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/users-model.js */ \"./src/models/users-model.js\");\n/* harmony import */ var _utils_emitters_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/emitters.js */ \"./src/utils/emitters.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n // import confirmEmail from '../../views/confirm-email.hbs'\n\nvar ConfirmEmailController = /*#__PURE__*/function (_SmartController) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__(ConfirmEmailController, _SmartController);\n\n  var _super = _createSuper(ConfirmEmailController);\n\n  function ConfirmEmailController(request, response) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, ConfirmEmailController);\n\n    _this = _super.call(this, request, response);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__(_this), \"optionsRender\", {\n      title: 'Подтверждение email',\n      isConfirmSuccess: false\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__(_this), \"layout\", 'confirm-email.hbs');\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__(ConfirmEmailController, [{\n    key: \"confirm\",\n    value: function confirm() {\n      var _this2 = this;\n\n      // проверка хеша\n      // 1. Проверить найден ли пользователь\n      _models_users_model_js__WEBPACK_IMPORTED_MODULE_8__.default.findOne({\n        hash: this.request.params.hash,\n        confirmEmail: false\n      }).then(function (user) {\n        // console.log(user)\n        if (user) {\n          // 2. Если пользователь найден и email не подтвержден, сменить временну роль на постоянную и подтвердить email\n          user.roles = user.roles.map(function (role) {\n            if (role === 'temp-role') {\n              return 'user';\n            }\n          });\n          user.confirmEmail = true;\n          new _models_users_model_js__WEBPACK_IMPORTED_MODULE_8__.default(user).save()[\"catch\"](function (error) {\n            return _utils_emitters_js__WEBPACK_IMPORTED_MODULE_9__.default.emit('onError', 'Ошибка при попытке сменить роль пользователя: ', error);\n          });\n          _this2.optionsRender.isConfirmSuccess = true;\n        } else {\n          // 3. Иначе вернуть ошибку\n          _this2.optionsRender.isConfirmSuccess = false;\n        } // 4. Отрендерить\n\n\n        return _this2.render();\n      })[\"catch\"](function (error) {\n        return _utils_emitters_js__WEBPACK_IMPORTED_MODULE_9__.default.emit('onError', 'Ошибка при попытке подтвердить email: ', error);\n      });\n    }\n  }]);\n\n  return ConfirmEmailController;\n}(_smart_controller_js__WEBPACK_IMPORTED_MODULE_7__.default);\n\n\n\n//# sourceURL=webpack://smart-platform/./src/controllers/confirm-email-controller.js?");

/***/ }),

/***/ "./src/controllers/smart-controller.js":
/*!*********************************************!*\
  !*** ./src/controllers/smart-controller.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SmartController)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n\n\n\n\n// import login from '../../views/login.hbs'\n// import accessDenied from '../../views/access-denied.hbs'\nvar SmartController = /*#__PURE__*/function () {\n  function SmartController(request, response) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, SmartController);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__(this, \"optionsRender\", {\n      /**\n       * свойства переданные в рендер\n       * title: '',\n       * layout: '...hbs'\n       * ...\n       * */\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__(this, \"layout\", '');\n\n    this.request = request;\n    this.response = response;\n    this.objectAccess = this.request.dataMain.accessRoute;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__(SmartController, [{\n    key: \"render\",\n    value: function render() {\n      if (!this._checkAccessRoute()) {\n        this.layout = this._checkUseLogin() ? 'login.hbs' : 'access-denied.hbs';\n      }\n\n      return this.response.status(200).render(this.layout, this.optionsRender);\n    }\n  }, {\n    key: \"_checkAccessRoute\",\n    value: function _checkAccessRoute() {\n      var _this$objectAccess;\n\n      return (_this$objectAccess = this.objectAccess) === null || _this$objectAccess === void 0 ? void 0 : _this$objectAccess.access;\n    }\n  }, {\n    key: \"_checkUseLogin\",\n    value: function _checkUseLogin() {\n      var _this$objectAccess2;\n\n      return (_this$objectAccess2 = this.objectAccess) === null || _this$objectAccess2 === void 0 ? void 0 : _this$objectAccess2.useLogin;\n    }\n  }]);\n\n  return SmartController;\n}();\n\n\n\n//# sourceURL=webpack://smart-platform/./src/controllers/smart-controller.js?");

/***/ }),

/***/ "./src/models/error-logs-model.js":
/*!****************************************!*\
  !*** ./src/models/error-logs-model.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar SchemaErrorLogs = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  date: {\n    type: Date,\n    \"default\": new Date()\n  },\n  textDescription: String,\n  textError: String\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.model('errorLog', SchemaErrorLogs));\n\n//# sourceURL=webpack://smart-platform/./src/models/error-logs-model.js?");

/***/ }),

/***/ "./src/models/event-logs-model.js":
/*!****************************************!*\
  !*** ./src/models/event-logs-model.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar SchemaEventLogs = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  date: {\n    type: Date,\n    \"default\": new Date()\n  },\n  eventName: String,\n  text: String,\n  user: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n    ref: 'User'\n  },\n  requestIP: String\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.model('eventLog', SchemaEventLogs));\n\n//# sourceURL=webpack://smart-platform/./src/models/event-logs-model.js?");

/***/ }),

/***/ "./src/models/request-log-model.js":
/*!*****************************************!*\
  !*** ./src/models/request-log-model.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar SchemaRequestLogs = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  // Описание схемы данных\n  date: {\n    type: Date,\n    \"default\": new Date()\n  },\n  requestUrl: String,\n  requestMethod: String,\n  requestCookies: Object,\n  requestSignedCookies: Object,\n  requestIP: String,\n  requestID: String,\n  body: Object,\n  params: Object,\n  user: {\n    email: String\n  },\n  accessRoute: Object\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.model('requestLog', SchemaRequestLogs));\n\n//# sourceURL=webpack://smart-platform/./src/models/request-log-model.js?");

/***/ }),

/***/ "./src/models/routes-model.js":
/*!************************************!*\
  !*** ./src/models/routes-model.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n // библиотека для подключение к mongodb\n\nvar SchemaRoutes = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  date: {\n    type: Date,\n    \"default\": new Date()\n  },\n  updatedAt: {\n    type: Date,\n    required: true\n  },\n  url: {\n    type: String,\n    required: true,\n    index: true\n  },\n  roleAccessSuccess: Array,\n  roleAccessDenied: Array,\n  userAccessSuccess: Array,\n  userAccessDenied: Array\n});\nSchemaRoutes.index({\n  url: 1\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.model('routes', SchemaRoutes));\n\n//# sourceURL=webpack://smart-platform/./src/models/routes-model.js?");

/***/ }),

/***/ "./src/models/users-model.js":
/*!***********************************!*\
  !*** ./src/models/users-model.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n // библиотека для подключение к mongodb\n\n\nvar SchemaUsers = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  date: {\n    type: Date,\n    \"default\": new Date()\n  },\n  updatedAt: {\n    type: Date,\n    required: true\n  },\n  mainEmail: {\n    type: String,\n    required: true,\n    index: true,\n    unique: true\n  },\n  confirmEmail: {\n    type: Boolean,\n    \"default\": false\n  },\n  hash: String,\n  emails: [{\n    value: String,\n    confirm: Boolean\n  }],\n  password: {\n    type: String,\n    required: true\n  },\n  name: String,\n  lastName: String,\n  patronymic: String,\n  addresses: [{\n    country: String,\n    city: String,\n    street: String,\n    houseNumber: String,\n    apartmentNumber: String\n  }],\n  phones: [String],\n  roles: [String]\n});\nSchemaUsers.index({\n  mainEmail: 1\n});\nSchemaUsers.pre('save', function (next) {\n  // хеширование пароля перед сохранением\n  if (!this.isModified(\"password\")) return next();\n  this.password = bcrypt__WEBPACK_IMPORTED_MODULE_1__.hashSync(this.password, 10);\n  next();\n}); // Метод для проверки пароля\n\nSchemaUsers.methods.comparePassword = function (plaintext, callback) {\n  return callback(null, bcrypt__WEBPACK_IMPORTED_MODULE_1__.compareSync(plaintext, this.password));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.model('users', SchemaUsers));\n\n//# sourceURL=webpack://smart-platform/./src/models/users-model.js?");

/***/ }),

/***/ "./src/routers/api/users-api-router.js":
/*!*********************************************!*\
  !*** ./src/routers/api/users-api-router.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _controllers_api_users_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/api/users-controller.js */ \"./src/controllers/api/users-controller.js\");\n\n\nvar usersApiRouters = express__WEBPACK_IMPORTED_MODULE_0__.Router();\nusersApiRouters.post('/registration', function (request, response) {\n  return new _controllers_api_users_controller_js__WEBPACK_IMPORTED_MODULE_1__.default(request, response).registrationWithEmail();\n});\nusersApiRouters.post('/login', function (request, response) {\n  return new _controllers_api_users_controller_js__WEBPACK_IMPORTED_MODULE_1__.default(request, response).loginWithEmail();\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usersApiRouters);\n\n//# sourceURL=webpack://smart-platform/./src/routers/api/users-api-router.js?");

/***/ }),

/***/ "./src/routers/configurator-router.js":
/*!********************************************!*\
  !*** ./src/routers/configurator-router.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _controllers_configurator_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/configurator-controller.js */ \"./src/controllers/configurator-controller.js\");\n\n\nvar configuratorRouter = express__WEBPACK_IMPORTED_MODULE_0__.Router();\nconfiguratorRouter.get('/', function (request, response) {\n  return new _controllers_configurator_controller_js__WEBPACK_IMPORTED_MODULE_1__.default(request, response).render();\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (configuratorRouter);\n\n//# sourceURL=webpack://smart-platform/./src/routers/configurator-router.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime */ \"regenerator-runtime\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n/* harmony import */ var _configs_server_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configs/server-config.js */ \"./src/configs/server-config.js\");\n/* harmony import */ var _models_routes_model_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/routes-model.js */ \"./src/models/routes-model.js\");\n/* harmony import */ var _utils_emitters_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/emitters.js */ \"./src/utils/emitters.js\");\n\n // библиотека для подключение к mongodb\n\n\n // файл инициализации приложения\n\n // models\n\n // emitters\n\n\n\nvar checkFindRecord = function checkFindRecord(model) {\n  return function (param) {\n    return model.findOne(param);\n  };\n}; // возвращает найденную запись\n\n\nmongoose__WEBPACK_IMPORTED_MODULE_1__.connect(_configs_server_config_js__WEBPACK_IMPORTED_MODULE_4__.default.connect.URL, {\n  useUnifiedTopology: true,\n  useNewUrlParser: true,\n  useCreateIndex: true\n}).then(function (result) {\n  // 1. Логируем подключение к БД\n  console.log('Соединение с mongodb установлено'); // 2. Создаем первичные записи маршрутов\n\n  var checkRoute = checkFindRecord(_models_routes_model_js__WEBPACK_IMPORTED_MODULE_5__.default);\n  var routeRecord = [];\n  routeRecord.push({\n    url: '/configurator',\n    updatedAt: new Date() // access\n\n  });\n  routeRecord.forEach( /*#__PURE__*/function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_2__.mark(function _callee(record) {\n      return regenerator_runtime__WEBPACK_IMPORTED_MODULE_2__.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return checkRoute({\n                url: record.url\n              });\n\n            case 2:\n              if (_context.sent) {\n                _context.next = 4;\n                break;\n              }\n\n              // маршрут не найден\n              new _models_routes_model_js__WEBPACK_IMPORTED_MODULE_5__.default(record).save(function (error) {\n                if (error) return _utils_emitters_js__WEBPACK_IMPORTED_MODULE_6__.default.emit('onError', 'Ошибка при создание записи маршрута: ', error);\n                console.log('Создана запись маршрута: ', record);\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }()); // 3. Включаем прослушивание порта\n\n  _app_js__WEBPACK_IMPORTED_MODULE_3__.default.listen(_configs_server_config_js__WEBPACK_IMPORTED_MODULE_4__.default.address.PORT, function () {\n    console.log(\"\\u0421\\u0435\\u0440\\u0432\\u0435\\u0440 \\u0437\\u0430\\u043F\\u0443\\u0449\\u0435\\u043D \\u043D\\u0430 \".concat(_configs_server_config_js__WEBPACK_IMPORTED_MODULE_4__.default.address.HOST, \":\").concat(_configs_server_config_js__WEBPACK_IMPORTED_MODULE_4__.default.address.PORT));\n    console.log(\"Сервер ожидает подключения...\");\n  });\n})[\"catch\"](function (error) {\n  return console.error('Ошибка подключения к mongodb', error);\n});\n\n//# sourceURL=webpack://smart-platform/./src/server.js?");

/***/ }),

/***/ "./src/templates/emails-templates.js":
/*!*******************************************!*\
  !*** ./src/templates/emails-templates.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"confirmEmailTemplate\": () => (/* binding */ confirmEmailTemplate)\n/* harmony export */ });\n/* harmony import */ var _configs_server_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/server-config.js */ \"./src/configs/server-config.js\");\n\nfunction confirmEmailTemplate() {\n  var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  if (!hash) return \"\";\n  return \"\\n        <h3> \\u0417\\u0434\\u0440\\u0430\\u0432\\u0441\\u0442\\u0432\\u0443\\u0439\\u0442\\u0435! </h3>\\n        <p> \\u0414\\u043B\\u044F \\u043F\\u043E\\u0434\\u0442\\u0432\\u0435\\u0440\\u0436\\u0434\\u0435\\u043D\\u0438\\u044F \\u0440\\u0435\\u0433\\u0438\\u0441\\u0442\\u0440\\u0430\\u0446\\u0438\\u0438 \\u043D\\u0430 \\u0441\\u0430\\u0439\\u0442\\u0435 www.\".concat(_configs_server_config_js__WEBPACK_IMPORTED_MODULE_0__.default.address.HOST, \", \\u043F\\u0435\\u0440\\u0435\\u0439\\u0434\\u0438\\u0442\\u0435 \\u043F\\u043E \\n            <b>\\n                <a \\n                    href=\\\"\").concat(_configs_server_config_js__WEBPACK_IMPORTED_MODULE_0__.default.address.PROTOCOL, \"://\").concat(_configs_server_config_js__WEBPACK_IMPORTED_MODULE_0__.default.address.HOST).concat(_configs_server_config_js__WEBPACK_IMPORTED_MODULE_0__.default.address.PORT ? ':' + _configs_server_config_js__WEBPACK_IMPORTED_MODULE_0__.default.address.PORT : '', \"/confirm_email/\").concat(hash, \"\\\">\\n                        \\u0441\\u0441\\u044B\\u043B\\u043A\\u0435\\n               </a>\\n            </b>. \\n        </p>\\n        <p> \\u0415\\u0441\\u043B\\u0438 \\u0412\\u044B \\u043D\\u0435 \\u0440\\u0435\\u0433\\u0438\\u0441\\u0442\\u0440\\u0438\\u0440\\u043E\\u0432\\u0430\\u043B\\u0438\\u0441\\u044C \\u043D\\u0430 \\u0441\\u0430\\u0439\\u0442\\u0435 www.\").concat(_configs_server_config_js__WEBPACK_IMPORTED_MODULE_0__.default.address.HOST, \", \\u043F\\u0440\\u043E\\u0441\\u0442\\u043E \\u043F\\u0440\\u043E\\u0438\\u0433\\u043D\\u043E\\u0440\\u0438\\u0440\\u0443\\u0439\\u0442\\u0435 \\u0434\\u0430\\u043D\\u043D\\u043E\\u0435 \\u043F\\u0438\\u0441\\u044C\\u043C\\u043E.</p>\\n    \");\n}\n\n//# sourceURL=webpack://smart-platform/./src/templates/emails-templates.js?");

/***/ }),

/***/ "./src/utils/emitters.js":
/*!*******************************!*\
  !*** ./src/utils/emitters.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! events */ \"events\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var _mailer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mailer.js */ \"./src/utils/mailer.js\");\n/* harmony import */ var _models_error_logs_model_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/error-logs-model.js */ \"./src/models/error-logs-model.js\");\n/* harmony import */ var _models_event_logs_model_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/event-logs-model.js */ \"./src/models/event-logs-model.js\");\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n // Создаем экземпляр слушателя событий\n\nvar Emitter = /*#__PURE__*/function (_EventEmitter) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__(Emitter, _EventEmitter);\n\n  var _super = _createSuper(Emitter);\n\n  function Emitter() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, Emitter);\n\n    return _super.apply(this, arguments);\n  }\n\n  return Emitter;\n}(events__WEBPACK_IMPORTED_MODULE_4__);\n\nvar events = new Emitter(); // mail\n\nvar sendMail = function sendMail(to, subject, html, request) {\n  // console.log(`to: ${to}, subject: ${subject}, html: ${html}`)\n  (0,_mailer_js__WEBPACK_IMPORTED_MODULE_6__.default)(to, subject, html).then(function () {\n    events.emit('saveEventLogs', 'Отправки письма', \"to: \".concat(to, \", subject: \").concat(subject, \", html: \").concat(html), request);\n  })[\"catch\"](function (error) {\n    return events.emit('onError', \"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043F\\u0440\\u0438 \\u043E\\u0442\\u043F\\u0440\\u0430\\u0432\\u043A\\u0435 email \\u043F\\u043E\\u043B\\u0443\\u0447\\u0430\\u0442\\u0435\\u043B\\u044E \".concat(to, \": \"), error);\n  });\n}; // log error\n\n\nvar logError = function logError(textDescription, textError) {\n  new _models_error_logs_model_js__WEBPACK_IMPORTED_MODULE_7__.default({\n    textDescription: textDescription,\n    textError: textError\n  }).save(function (error) {\n    if (error) console.error(error);\n  });\n  console.error(textDescription, textError);\n}; // log events\n\n\nvar logEvents = function logEvents(eventName, text, request) {\n  var _request$dataMain, _request$dataMain2, _request$dataMain2$us;\n\n  // console.log('dm', request)\n  new _models_event_logs_model_js__WEBPACK_IMPORTED_MODULE_8__.default({\n    eventName: eventName,\n    text: text,\n    requestIP: (request === null || request === void 0 ? void 0 : (_request$dataMain = request.dataMain) === null || _request$dataMain === void 0 ? void 0 : _request$dataMain.requestIP) || '',\n    user: mongoose__WEBPACK_IMPORTED_MODULE_5__.Types.ObjectId((request === null || request === void 0 ? void 0 : (_request$dataMain2 = request.dataMain) === null || _request$dataMain2 === void 0 ? void 0 : (_request$dataMain2$us = _request$dataMain2.user) === null || _request$dataMain2$us === void 0 ? void 0 : _request$dataMain2$us._id) || 0)\n  }).save(function (error) {\n    if (error) events.emit('onError', 'Ошибка во время сохранения лога события: ', error);\n  });\n}; // listeners\n\n\nevents.on('sendMail', sendMail); // Связываем слушатель событий и функцию\n\nevents.on('onError', logError);\nevents.on('saveEventLogs', logEvents);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);\n\n//# sourceURL=webpack://smart-platform/./src/utils/emitters.js?");

/***/ }),

/***/ "./src/utils/generators.js":
/*!*********************************!*\
  !*** ./src/utils/generators.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomKeyGenerator\": () => (/* binding */ randomKeyGenerator)\n/* harmony export */ });\nfunction randomKeyGenerator() {\n  // Генератор случайного хеша\n  var letters = 'abcdefghijklmnopqrstuvwxyz0123456789';\n  var word = '';\n\n  for (var i = 0; i < 15; i++) {\n    word += letters.charAt(Math.floor(Math.random() * letters.length));\n  }\n\n  var randomKey = word.substr(0, 5) + '-' + word.substr(5, 5) + '-' + word.substr(10, 5);\n  return randomKey.toUpperCase();\n}\n\n//# sourceURL=webpack://smart-platform/./src/utils/generators.js?");

/***/ }),

/***/ "./src/utils/is-type.js":
/*!******************************!*\
  !*** ./src/utils/is-type.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isNumber\": () => (/* binding */ isNumber)\n/* harmony export */ });\nfunction isNumber(value) {\n  return typeof value === 'number' && isFinite(value);\n}\n\n\n\n//# sourceURL=webpack://smart-platform/./src/utils/is-type.js?");

/***/ }),

/***/ "./src/utils/mailer.js":
/*!*****************************!*\
  !*** ./src/utils/mailer.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var _configs_mailer_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs/mailer-config.js */ \"./src/configs/mailer-config.js\");\n\n\nvar transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({\n  port: 587,\n  secure: true,\n  service: 'gmail',\n  auth: {\n    user: 'reports.sti.mailer@gmail.com',\n    pass: 'neosjhdbhJHJHf34f'\n  }\n});\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(to, subject, html) {\n  return transporter.sendMail({\n    from: _configs_mailer_config_js__WEBPACK_IMPORTED_MODULE_1__.MAILER_FROM,\n    to: to,\n    subject: subject,\n    html: html\n  });\n}\n\n//# sourceURL=webpack://smart-platform/./src/utils/mailer.js?");

/***/ }),

/***/ "./src/utils/validate.js":
/*!*******************************!*\
  !*** ./src/utils/validate.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"testEmail\": () => (/* binding */ testEmail)\n/* harmony export */ });\nfunction testEmail() {\n  var email = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var reg = /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,24}))$/;\n  return reg.test(email);\n}\n\n\n\n//# sourceURL=webpack://smart-platform/./src/utils/validate.js?");

/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");;

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");;

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/classCallCheck");;

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/createClass");;

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");;

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");;

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/inherits");;

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");;

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");;

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

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("regenerator-runtime");;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.js");
/******/ 	
/******/ })()
;