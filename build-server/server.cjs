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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ConfirmEmailController)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _smart_controller_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./smart-controller.js */ \"./src/controllers/smart-controller.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../models/users-model'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _utils_emitters_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/emitters.js */ \"./src/utils/emitters.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n // import confirmEmail from '../../views/confirm-email.hbs'\n\nvar ConfirmEmailController = /*#__PURE__*/function (_SmartController) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__(ConfirmEmailController, _SmartController);\n\n  var _super = _createSuper(ConfirmEmailController);\n\n  function ConfirmEmailController(request, response) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, ConfirmEmailController);\n\n    _this = _super.call(this, request, response);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__(_this), \"optionsRender\", {\n      title: 'Подтверждение email',\n      isConfirmSuccess: false\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__(_this), \"layout\", 'confirm-email.hbs');\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__(ConfirmEmailController, [{\n    key: \"confirm\",\n    value: function confirm() {\n      var _this2 = this;\n\n      // проверка хеша\n      // 1. Проверить найден ли пользователь\n      Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../models/users-model'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n        hash: this.request.params.hash,\n        confirmEmail: false\n      }).then(function (user) {\n        // console.log(user)\n        if (user) {\n          // 2. Если пользователь найден и email не подтвержден, сменить временну роль на постоянную и подтвердить email\n          user.roles = user.roles.map(function (role) {\n            if (role === 'temp-role') {\n              return 'user';\n            }\n          });\n          user.confirmEmail = true;\n          new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../models/users-model'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(user).save()[\"catch\"](function (error) {\n            return _utils_emitters_js__WEBPACK_IMPORTED_MODULE_9__.default.emit('onError', 'Ошибка при попытке сменить роль пользователя: ', error);\n          });\n          _this2.optionsRender.isConfirmSuccess = true;\n        } else {\n          // 3. Иначе вернуть ошибку\n          _this2.optionsRender.isConfirmSuccess = false;\n        } // 4. Отрендерить\n\n\n        return _this2.render();\n      })[\"catch\"](function (error) {\n        return _utils_emitters_js__WEBPACK_IMPORTED_MODULE_9__.default.emit('onError', 'Ошибка при попытке подтвердить email: ', error);\n      });\n    }\n  }]);\n\n  return ConfirmEmailController;\n}(_smart_controller_js__WEBPACK_IMPORTED_MODULE_7__.default);\n\n\n\n//# sourceURL=webpack://smart-platform/./src/controllers/confirm-email-controller.js?");

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

/***/ "./src/routers/api/users-api-router.js":
/*!*********************************************!*\
  !*** ./src/routers/api/users-api-router.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../controllers/api/users-controller'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nvar usersApiRouters = express__WEBPACK_IMPORTED_MODULE_0__.Router();\nusersApiRouters.post('/registration', function (request, response) {\n  return new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../controllers/api/users-controller'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(request, response).registrationWithEmail();\n});\nusersApiRouters.post('/login', function (request, response) {\n  return new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../controllers/api/users-controller'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(request, response).loginWithEmail();\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usersApiRouters);\n\n//# sourceURL=webpack://smart-platform/./src/routers/api/users-api-router.js?");

/***/ }),

/***/ "./src/routers/configurator-router.js":
/*!********************************************!*\
  !*** ./src/routers/configurator-router.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _controllers_configurator_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/configurator-controller.js */ \"./src/controllers/configurator-controller.js\");\n\n\nvar configuratorRouter = express__WEBPACK_IMPORTED_MODULE_0__.Router();\nconfiguratorRouter.get('/', function (request, response) {\n  return new _controllers_configurator_controller_js__WEBPACK_IMPORTED_MODULE_1__.default(request, response).render();\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (configuratorRouter);\n\n//# sourceURL=webpack://smart-platform/./src/routers/configurator-router.js?");

/***/ }),

/***/ "./src/utils/emitters.js":
/*!*******************************!*\
  !*** ./src/utils/emitters.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! events */ \"events\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var _mailer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mailer.js */ \"./src/utils/mailer.js\");\n/* harmony import */ var _models_error_logs_model_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/error-logs-model.js */ \"./src/models/error-logs-model.js\");\n/* harmony import */ var _models_event_logs_model_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/event-logs-model.js */ \"./src/models/event-logs-model.js\");\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n // Создаем экземпляр слушателя событий\n\nvar Emitter = /*#__PURE__*/function (_EventEmitter) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__(Emitter, _EventEmitter);\n\n  var _super = _createSuper(Emitter);\n\n  function Emitter() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, Emitter);\n\n    return _super.apply(this, arguments);\n  }\n\n  return Emitter;\n}(events__WEBPACK_IMPORTED_MODULE_4__);\n\nvar events = new Emitter(); // mail\n\nvar sendMail = function sendMail(to, subject, html, request) {\n  // console.log(`to: ${to}, subject: ${subject}, html: ${html}`)\n  (0,_mailer_js__WEBPACK_IMPORTED_MODULE_6__.default)(to, subject, html).then(function () {\n    events.emit('saveEventLogs', 'Отправки письма', \"to: \".concat(to, \", subject: \").concat(subject, \", html: \").concat(html), request);\n  })[\"catch\"](function (error) {\n    return events.emit('onError', \"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043F\\u0440\\u0438 \\u043E\\u0442\\u043F\\u0440\\u0430\\u0432\\u043A\\u0435 email \\u043F\\u043E\\u043B\\u0443\\u0447\\u0430\\u0442\\u0435\\u043B\\u044E \".concat(to, \": \"), error);\n  });\n}; // log error\n\n\nvar logError = function logError(textDescription, textError) {\n  new _models_error_logs_model_js__WEBPACK_IMPORTED_MODULE_7__.default({\n    textDescription: textDescription,\n    textError: textError\n  }).save(function (error) {\n    if (error) console.error(error);\n  });\n  console.error(textDescription, textError);\n}; // log events\n\n\nvar logEvents = function logEvents(eventName, text, request) {\n  var _request$dataMain, _request$dataMain2, _request$dataMain2$us;\n\n  // console.log('dm', request)\n  new _models_event_logs_model_js__WEBPACK_IMPORTED_MODULE_8__.default({\n    eventName: eventName,\n    text: text,\n    requestIP: (request === null || request === void 0 ? void 0 : (_request$dataMain = request.dataMain) === null || _request$dataMain === void 0 ? void 0 : _request$dataMain.requestIP) || '',\n    user: mongoose__WEBPACK_IMPORTED_MODULE_5__.Types.ObjectId((request === null || request === void 0 ? void 0 : (_request$dataMain2 = request.dataMain) === null || _request$dataMain2 === void 0 ? void 0 : (_request$dataMain2$us = _request$dataMain2.user) === null || _request$dataMain2$us === void 0 ? void 0 : _request$dataMain2$us._id) || 0)\n  }).save(function (error) {\n    if (error) events.emit('onError', 'Ошибка во время сохранения лога события: ', error);\n  });\n}; // listeners\n\n\nevents.on('sendMail', sendMail); // Связываем слушатель событий и функцию\n\nevents.on('onError', logError);\nevents.on('saveEventLogs', logEvents);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);\n\n//# sourceURL=webpack://smart-platform/./src/utils/emitters.js?");

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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var hbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hbs */ \"hbs\");\n/* harmony import */ var hbs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hbs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express_handlebars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express-handlebars */ \"express-handlebars\");\n/* harmony import */ var express_handlebars__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_handlebars__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _configs_server_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./configs/server-config */ \"./src/configs/server-config.js\");\n/* harmony import */ var _models_users_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models/users-model */ \"./src/models/users-model.ts\");\n/* harmony import */ var _models_routes_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./models/routes-model */ \"./src/models/routes-model.ts\");\n/* harmony import */ var _models_request_log_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./models/request-log-model */ \"./src/models/request-log-model.js\");\n/* harmony import */ var _routers_configurator_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routers/configurator-router */ \"./src/routers/configurator-router.js\");\n/* harmony import */ var _routers_api_users_api_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routers/api/users-api-router */ \"./src/routers/api/users-api-router.js\");\n/* harmony import */ var _utils_is_type__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/is-type */ \"./src/utils/is-type.js\");\n/* harmony import */ var _utils_emitters__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/emitters */ \"./src/utils/emitters.js\");\n/* harmony import */ var _controllers_confirm_email_controller__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./controllers/confirm-email-controller */ \"./src/controllers/confirm-email-controller.js\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\n\n\n\n// config\n\n// models\n\n\n\n// routers\n\n\n// utils\n\n// emitters\n\n// controllers\n\n// interface IRequestMain extends Express.Request {\n//     dataMain: {\n//         user: IUsersModel | null | undefined\n//     }\n// }\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // создаем экземпляр експресс\n// настройка hbs, helpers\napp.engine(\"hbs\", express_handlebars__WEBPACK_IMPORTED_MODULE_4___default()({\n    layoutsDir: \"views/layouts\",\n    defaultLayout: \"main-layout\",\n    extname: \"hbs\",\n    helpers: {}\n}));\napp.set(\"view engine\", \"hbs\");\nhbs__WEBPACK_IMPORTED_MODULE_3___default().registerPartials(\"/partials\");\n// статика\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(\"build-server/dist\"));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(\"build-server/public/css\"));\n// защита сервера\napp.use(helmet__WEBPACK_IMPORTED_MODULE_5___default()());\n// настройка helmet\napp.use(helmet__WEBPACK_IMPORTED_MODULE_5___default().contentSecurityPolicy({\n    directives: {\n        defaultSrc: [\"'self'\"],\n        scriptSrc: [\"'self'\", \"'unsafe-eval'\"],\n        styleSrc: [\"'self'\", \"'unsafe-inline'\", 'fonts.googleapis.com', 'fonts.gstatic.com'],\n        fontSrc: [\"'self'\", 'fonts.googleapis.com', 'fonts.gstatic.com'],\n    }\n}));\n// app.use(helmet.referrerPolicy({\n//   policy: [\"origin\"],\n// }))\n// настройка CORS\nconst whitelist = [_configs_server_config__WEBPACK_IMPORTED_MODULE_9__.default.address.PROTOCOL + \"://\" + _configs_server_config__WEBPACK_IMPORTED_MODULE_9__.default.address.HOST + ':' + _configs_server_config__WEBPACK_IMPORTED_MODULE_9__.default.address.PORT];\nconst corsOptions = {\n    origin: function (origin, callback) {\n        if (whitelist.indexOf(origin) !== -1 || !origin || origin === 'null') {\n            return callback(null, true);\n        }\n        else {\n            console.log(origin);\n            return callback(new Error('Not allowed by CORS'));\n        }\n    },\n    optionsSuccessStatus: 200\n};\napp.use(cors__WEBPACK_IMPORTED_MODULE_6___default()(corsOptions));\n// сжатие\napp.use(compression__WEBPACK_IMPORTED_MODULE_7___default()());\n// парсеры\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_1___default()(_configs_server_config__WEBPACK_IMPORTED_MODULE_9__.default.secure.KEY_FOR_COOKIE)); // Передаем строку шифрования для cookie\nconst urlencodedParser = body_parser__WEBPACK_IMPORTED_MODULE_8___default().urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }); // чтение данных из форм\nconst jsonParser = body_parser__WEBPACK_IMPORTED_MODULE_8___default().json({ limit: '50mb' }); // чтение данных из json\napp.use(urlencodedParser);\napp.use(jsonParser);\n// middleware function\napp.use(onRequest);\n// routes\napp.use('/configurator', _routers_configurator_router__WEBPACK_IMPORTED_MODULE_13__.default);\napp.get('/confirm_email/:hash', (request, response) => {\n    // подтверждение email\n    return new _controllers_confirm_email_controller__WEBPACK_IMPORTED_MODULE_17__.default(request, response).confirm();\n});\n// routers API\napp.use('/api/users', _routers_api_users_api_router__WEBPACK_IMPORTED_MODULE_14__.default);\n// обработка не существующего маршрута\napp.use(function (request, response) {\n    var _a, _b;\n    console.log('⚡️[server]: Not Found', request.method, request.originalUrl, 'user:', (_b = (_a = request.dataMain) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.mainEmail);\n    return response.status(404).send(\"Not Found\");\n});\n// Вспомогательные функции\nfunction onRequest(request, response, next) {\n    var _a, _b;\n    return __awaiter(this, void 0, void 0, function* () {\n        // 1. Собрать данные о подключение\n        const clientInfo = {\n            date: new Date(),\n            requestUrl: request.url,\n            requestMethod: request.method,\n            requestCookies: request.cookies,\n            requestSignedCookies: request.signedCookies,\n            requestIP: request.ip,\n            body: request.body,\n            params: request.params\n        };\n        // const clientInfo = getClientInfo()\n        // 2. Проверить пользователя\n        const token = ((_a = clientInfo.requestSignedCookies) === null || _a === void 0 ? void 0 : _a.token)\n            ? jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify((_b = clientInfo.requestSignedCookies) === null || _b === void 0 ? void 0 : _b.token, _configs_server_config__WEBPACK_IMPORTED_MODULE_9__.default.secure.KEY_FOR_JWT)\n            : {};\n        // console.log(token)\n        const getUser = (email = '') => {\n            return _models_users_model__WEBPACK_IMPORTED_MODULE_10__.default.findOne({ mainEmail: email });\n        };\n        const user = yield getUser(token === null || token === void 0 ? void 0 : token.email);\n        // console.log(user)\n        Object.assign(clientInfo, { user: user !== null && user !== void 0 ? user : {} }); // записываем данные пользователя в clientInfo\n        // 3. Проверить доступ к маршруту\n        const getRoutes = (url = '') => {\n            const requestUrl = url.split('?'); // игнорируем параметры переданные после знака '?'\n            const urls = requestUrl[0].split('/');\n            /** если последний элемент в маршруте число, сохраняем его как '*'\n             * так как это параметр маршрута\n             */\n            const lastValue = urls.pop();\n            urls.push((0,_utils_is_type__WEBPACK_IMPORTED_MODULE_15__.isNumber)(lastValue) ? '*' : lastValue);\n            return _models_routes_model__WEBPACK_IMPORTED_MODULE_11__.default.findOne({ url: urls.join('/') });\n        };\n        const route = yield getRoutes(clientInfo.requestUrl); // маршрут из базы | null\n        const checkAccess = (route, user) => {\n            if (!route || !user)\n                return { access: true, useLogin: false };\n            const denied = [];\n            const checkDeniedAccess = (arrayAccess = []) => (arrayRoles = []) => {\n                if (arrayAccess.length)\n                    return arrayRoles.length ? arrayRoles.filter(role => arrayAccess.includes(role)).length > 0 : false;\n                else\n                    return false;\n            };\n            const checkSuccessAccess = (arrayAccess = []) => (arrayRoles = []) => {\n                if (arrayAccess.length)\n                    return arrayRoles.length ? arrayRoles.filter(role => arrayAccess.includes(role)).length === 0 : true;\n                else\n                    return false;\n            };\n            denied.push((checkSuccessAccess(route === null || route === void 0 ? void 0 : route.roleAccessSuccess))(user === null || user === void 0 ? void 0 : user.roles), (checkSuccessAccess(route === null || route === void 0 ? void 0 : route.userAccessSuccess))([user === null || user === void 0 ? void 0 : user.mainEmail]), (checkDeniedAccess(route === null || route === void 0 ? void 0 : route.roleAccessDenied))(user === null || user === void 0 ? void 0 : user.roles), (checkDeniedAccess(route === null || route === void 0 ? void 0 : route.userAccessDenied))([user === null || user === void 0 ? void 0 : user.mainEmail]));\n            // console.log(denied)\n            // console.log('result:', {access: !denied.reduce((acc, value) => acc + value), useLogin: !user.mainEmail})\n            // useLogin - параметр, который говорит системе, что необходимо в начале пройти логин\n            // @ts-ignore\n            return { access: !denied.reduce((acc, value) => acc + value), useLogin: !user.mainEmail };\n        };\n        // записываем в clientInfo данные о доступности маршрута\n        // console.log(clientInfo, route)\n        Object.assign(clientInfo, { accessRoute: checkAccess(route, clientInfo.user) });\n        // 4. Залогировать подключение\n        new _models_request_log_model__WEBPACK_IMPORTED_MODULE_12__.default(clientInfo).save(error => {\n            if (error)\n                _utils_emitters__WEBPACK_IMPORTED_MODULE_16__.default.emit('onError', 'Ошибка при сохранение данных в лог подключения: ', error);\n        });\n        // 5. Записать данные подключения в request\n        request.dataMain = clientInfo;\n        // передаем управление следующему middleware\n        next();\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n\n//# sourceURL=webpack://smart-platform/./src/app.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n // библиотека для подключение к mongodb\n\nconst SchemaUsers = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    date: {\n        type: Date,\n        default: new Date()\n    },\n    updatedAt: {\n        type: Date,\n        required: true,\n    },\n    mainEmail: {\n        type: String,\n        required: true,\n        index: true,\n        unique: true\n    },\n    confirmEmail: {\n        type: Boolean,\n        default: false\n    },\n    hash: String,\n    emails: [\n        {\n            value: String,\n            confirm: Boolean\n        }\n    ],\n    password: {\n        type: String,\n        required: true\n    },\n    name: String,\n    lastName: String,\n    patronymic: String,\n    addresses: [{\n            country: String,\n            city: String,\n            street: String,\n            houseNumber: String,\n            apartmentNumber: String\n        }],\n    phones: [String],\n    roles: [String]\n});\nSchemaUsers.index({ mainEmail: 1 });\nSchemaUsers.pre('save', function (next) {\n    // хеширование пароля перед сохранением\n    if (!this.isModified(\"password\"))\n        return next();\n    this.password = bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hashSync(this.password, 10);\n    next();\n});\n// Метод для проверки пароля\nSchemaUsers.methods.comparePassword = function (plaintext, callback) {\n    return callback(null, bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compareSync(plaintext, this.password));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('users', SchemaUsers));\n\n\n//# sourceURL=webpack://smart-platform/./src/models/users-model.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/app.ts\");\n/* harmony import */ var _configs_server_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configs/server-config */ \"./src/configs/server-config.js\");\n/* harmony import */ var _models_routes_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/routes-model */ \"./src/models/routes-model.ts\");\n/* harmony import */ var _utils_emitters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/emitters */ \"./src/utils/emitters.js\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n // библиотека для подключение к mongodb\n // файл инициализации приложения\n\n// models\n\n// emitters\n\nconst checkFindRecord = (model) => (param) => model.findOne(param); // возвращает найденную запись\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(_configs_server_config__WEBPACK_IMPORTED_MODULE_2__.default.connect.URL, {\n    useUnifiedTopology: true,\n    useNewUrlParser: true,\n    useCreateIndex: true\n})\n    .then(() => {\n    // 1. Логируем подключение к БД\n    console.log('⚡️[server]: Соединение с mongodb установлено');\n    // 2. Создаем первичные записи маршрутов\n    const checkRoute = checkFindRecord(_models_routes_model__WEBPACK_IMPORTED_MODULE_3__.default);\n    const routeRecord = [];\n    routeRecord.push({\n        url: '/configurator',\n        updatedAt: new Date(),\n    });\n    routeRecord.forEach((record) => __awaiter(void 0, void 0, void 0, function* () {\n        if (!(yield checkRoute({ url: record.url }))) { // маршрут не найден\n            new _models_routes_model__WEBPACK_IMPORTED_MODULE_3__.default(record).save(error => {\n                if (error)\n                    return _utils_emitters__WEBPACK_IMPORTED_MODULE_4__.default.emit('onError', '⚡️[DB]: Ошибка при создание записи маршрута: ', error);\n                console.log('⚡️[DB]: Создана запись маршрута: ', record);\n            });\n        }\n    }));\n    // 3. Включаем прослушивание порта\n    _app__WEBPACK_IMPORTED_MODULE_1__.default.listen(_configs_server_config__WEBPACK_IMPORTED_MODULE_2__.default.address.PORT, () => {\n        console.log(`⚡️[server]: Сервер запущен на ${_configs_server_config__WEBPACK_IMPORTED_MODULE_2__.default.address.HOST}:${_configs_server_config__WEBPACK_IMPORTED_MODULE_2__.default.address.PORT}`);\n        console.log(\"⚡️[server]: Сервер ожидает подключения...\");\n    });\n})\n    .catch(error => console.error('⚡️[DB]: Ошибка подключения к mongodb', error));\n\n\n//# sourceURL=webpack://smart-platform/./src/server.ts?");

/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");;

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