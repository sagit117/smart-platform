/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_dictionary_rus_ts";
exports.ids = ["src_dictionary_rus_ts"];
exports.modules = {

/***/ "./src/dictionary/rus.ts":
/*!*******************************!*\
  !*** ./src/dictionary/rus.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _configs_server_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/server-config */ \"./src/configs/server-config.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    /** database */\n    // success\n    'Соединение с mongodb установлено': '⚡️[DB]: Соединение с mongodb установлено',\n    'Создана запись маршрута:': '⚡️[DB]: Создана запись маршрута: ',\n    // error\n    'Ошибка при создание записи маршрута:': '⚡️[DB]: Ошибка при создание записи маршрута: ',\n    'Ошибка подключения к mongodb:': '⚡️[DB]: Ошибка подключения к mongodb: ',\n    'Ошибка при сохранение данных в лог подключения:': '⚡️[DB]: Ошибка при сохранение данных в лог подключения: ',\n    'Ошибка при попытке сменить роль пользователя:': '⚡️[DB]: Ошибка при попытке сменить роль пользователя: ',\n    'Ошибка при попытке подтвердить email:': '⚡️[DB]: Ошибка при попытке подтвердить email: ',\n    'Ошибка при запросе поиска пользователей по email:': '⚡️[DB]: Ошибка при запросе поиска пользователей по email: ',\n    'Ошибка при запросе попследней попытке регистрации:': '⚡️[DB]: Ошибка при запросе попследней попытке регистрации: ',\n    'Ошибка при сохранение данных пользователя:': '⚡️[DB]: Ошибка при сохранение данных пользователя: ',\n    'Ошибка при проверки пароля во время логина:': '⚡️[DB]: Ошибка при проверки пароля во время логина: ',\n    'Ошибка при запросе поиска пользователей по хеш-коду:': '⚡️[DB]: Ошибка при запросе поиска пользователей по хеш-коду: ',\n    'Ошибка при запросе попследней попытке восстановить пароль:': '⚡️[DB]: Ошибка при запросе попследней попытке восстановить пароль: ',\n    'Ошибка при запросе попследней попытке изменить пароль:': '⚡️[DB]: Ошибка при запросе попследней попытке изменить пароль: ',\n    'Ошибка при попытке сохранить в БД лог ошибки:': '⚡️[DB]: Ошибка при попытке сохранить в БД лог ошибки: ',\n    'Ошибка во время сохранения лога события:': '⚡️[DB]: Ошибка во время сохранения лога события: ',\n    /** server */\n    // success\n    'Сервер запущен на {{host}}:{{port}}': '⚡️[server]: Сервер запущен на {{host}}:{{port}}',\n    'Сервер ожидает подключения...': '⚡️[server]: Сервер ожидает подключения...',\n    'Пользователь авторизован!': '⚡️[server]: Пользователь авторизован!',\n    // error\n    'Запрещено настройками CORS': '⚡️[server]: Запрещено настройками CORS',\n    'Ресурс не найден': '⚡️[server]: Ресурс не найден',\n    'В доступе отказано': '⚡️[server]: В доступе отказано',\n    /** routes title */\n    'Подтверждение email': 'Подтверждение email',\n    'Конфигуратор': 'Конфигуратор',\n    /** auth */\n    // error\n    'Введите корректный email!': 'Введите корректный email!',\n    'Указанный email уже зарегистрирован!': 'Указанный email уже зарегистрирован!',\n    'Перед повторным запросом должно пройти некоторое время!': 'Перед повторным запросом должно пройти некоторое время!',\n    'Произошла ошибка во время выполнения операции!': 'Произошла ошибка во время выполнения операции!',\n    'Указанный email или пароль не совпадает!': 'Указанный email или пароль не совпадает!',\n    'Указанный email не существует': 'Указанный email не существует',\n    'Email не подтвержден': 'Email не подтвержден',\n    // success\n    'Регистрация прошла успешно!': 'Регистрация прошла успешно!',\n    'Пользователь авторизован успешно!': 'Пользователь авторизован успешно!',\n    'Запрос на восстановление доступа обработан': 'Запрос на восстановление доступа обработан',\n    'Ваш email успешно подтвержден!': 'Ваш email успешно подтвержден!',\n    /** event name */\n    'Регистрация пользователя': 'Регистрация пользователя',\n    'Пользователь вошел в систему': 'Пользователь вошел в систему',\n    'Запрос сброса пароля': 'Запрос сброса пароля',\n    'Смена пароля': 'Смена пароля',\n    'Отправки письма': 'Отправки письма',\n    /** email subject */\n    'Подтверждение адреса электронной почты': 'Подтверждение адреса электронной почты',\n    'Вход в систему': 'Вход в систему',\n    'Восстановление пароля': 'Восстановление пароля',\n    /** errors */\n    'Ошибка при отправке email получателю {{email}}': 'Ошибка при отправке email получателю {{email}}',\n    /** labels */\n    'Введите email:': 'Введите email:',\n    /** email templates */\n    confirmEmailTemplate: `\n            <h3> Здравствуйте! </h3>\n            <p> \n                Для подтверждения регистрации на сайте www.${_configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.HOST}, перейдите по \n                <b>\n                    <a \n                        href=\"${_configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.PROTOCOL}://${_configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.HOST}${_configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.PORT\n        ? ':' + _configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.PORT\n        : ''}/confirm_email/{{hash}}\">\n                            ссылке\n                   </a>\n                </b>. \n            </p>\n            <p> Если Вы не регистрировались на сайте www.${_configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.HOST}, просто проигнорируйте данное письмо.</p>\n        `,\n    accountLogin: `\n                <h3> Здравствуйте! Вы вошли в аккаунт на сайте www.${_configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.HOST}</h3>\n                \n                <p> \n                    Если это были не Вы, \n                    <b>\n                        <a \n                            href=\"${_configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.PROTOCOL}://${_configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.HOST}${_configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.PORT\n        ? ':' + _configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.PORT\n        : ''}/change-password\">\n                                смените пароль\n                       </a>\n                    </b>.\n                </p>\n                \n        `,\n    restorePassword: `\n            <h3> Здравствуйте! </h3>\n            <p> \n                Вы запросили восстановление доступа к сайту www.${_configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.HOST}, для этого перейдите по \n                <b>\n                    <a \n                        href=\"${_configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.PROTOCOL}://${_configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.HOST}${_configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.PORT\n        ? ':' + _configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.PORT\n        : ''}/reset-password/{{hash}}\">\n                            ссылке\n                   </a>\n                </b>.\n            </p>\n            <p> Если Вы не запрашивали восстановление доступа к сайту www.${_configs_server_config__WEBPACK_IMPORTED_MODULE_0__.default.address.HOST}, просто проигнорируйте данное письмо.</p>\n        `\n});\n\n\n//# sourceURL=webpack://smart-platform/./src/dictionary/rus.ts?");

/***/ })

};
;