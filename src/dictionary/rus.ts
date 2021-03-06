import Config from "../configs/server-config";
import APP from "../configs/server-config";

export default {
    /** database */
    // success
    'Соединение с mongodb установлено': '⚡️[DB]: Соединение с mongodb установлено',
    'Создана запись маршрута:': '⚡️[DB]: Создана запись маршрута: ',
    // error
    'Ошибка при создание записи маршрута:': '⚡️[DB]: Ошибка при создание записи маршрута: ',
    'Ошибка подключения к mongodb:': '⚡️[DB]: Ошибка подключения к mongodb: ',
    'Ошибка при сохранение данных в лог подключения:': '⚡️[DB]: Ошибка при сохранение данных в лог подключения: ',
    'Ошибка при попытке сменить роль пользователя:': '⚡️[DB]: Ошибка при попытке сменить роль пользователя: ',
    'Ошибка при попытке подтвердить email:': '⚡️[DB]: Ошибка при попытке подтвердить email: ',
    'Ошибка при запросе поиска пользователей по email:': '⚡️[DB]: Ошибка при запросе поиска пользователей по email: ',
    'Ошибка при запросе попследней попытке регистрации:': '⚡️[DB]: Ошибка при запросе попследней попытке регистрации: ',
    'Ошибка при сохранение данных пользователя:': '⚡️[DB]: Ошибка при сохранение данных пользователя: ',
    'Ошибка при проверки пароля во время логина:': '⚡️[DB]: Ошибка при проверки пароля во время логина: ',
    'Ошибка при запросе поиска пользователей по хеш-коду:': '⚡️[DB]: Ошибка при запросе поиска пользователей по хеш-коду: ',
    'Ошибка при запросе попследней попытке восстановить пароль:': '⚡️[DB]: Ошибка при запросе попследней попытке восстановить пароль: ',
    'Ошибка при запросе попследней попытке изменить пароль:': '⚡️[DB]: Ошибка при запросе попследней попытке изменить пароль: ',
    'Ошибка при попытке сохранить в БД лог ошибки:': '⚡️[DB]: Ошибка при попытке сохранить в БД лог ошибки: ',
    'Ошибка во время сохранения лога события:': '⚡️[DB]: Ошибка во время сохранения лога события: ',

    /** server */
    // success
    'Сервер запущен на {{host}}:{{port}}': '⚡️[server]: Сервер запущен на {{host}}:{{port}}',
    'Сервер ожидает подключения...': '⚡️[server]: Сервер ожидает подключения...',
    'Пользователь авторизован!': '⚡️[server]: Пользователь авторизован!',
    // error
    'Запрещено настройками CORS': '⚡️[server]: Запрещено настройками CORS',
    'Ресурс не найден': '⚡️[server]: Ресурс не найден',
    'В доступе отказано': '⚡️[server]: В доступе отказано',

    /** routes title */
    'Подтверждение email': 'Подтверждение email',
    'Конфигуратор': 'Конфигуратор',

    /** auth */
    // error
    'Введите корректный email!': 'Введите корректный email!',
    'Указанный email уже зарегистрирован!': 'Указанный email уже зарегистрирован!',
    'Перед повторным запросом должно пройти некоторое время!': 'Перед повторным запросом должно пройти некоторое время!',
    'Произошла ошибка во время выполнения операции!': 'Произошла ошибка во время выполнения операции!',
    'Указанный email или пароль не совпадает!': 'Указанный email или пароль не совпадает!',
    'Указанный email не существует': 'Указанный email не существует',
    'Email не подтвержден': 'Email не подтвержден',
    // success
    'Регистрация прошла успешно!': 'Регистрация прошла успешно!',
    'Пользователь авторизован успешно!': 'Пользователь авторизован успешно!',
    'Запрос на восстановление доступа обработан': 'Запрос на восстановление доступа обработан',
    'Ваш email успешно подтвержден!': 'Ваш email успешно подтвержден!',

    /** event name */
    'Регистрация пользователя': 'Регистрация пользователя',
    'Пользователь вошел в систему': 'Пользователь вошел в систему',
    'Запрос сброса пароля': 'Запрос сброса пароля',
    'Смена пароля': 'Смена пароля',
    'Отправки письма': 'Отправки письма',

    /** email subject */
    'Подтверждение адреса электронной почты': 'Подтверждение адреса электронной почты',
    'Вход в систему': 'Вход в систему',
    'Восстановление пароля': 'Восстановление пароля',

    /** errors */
    'Ошибка при отправке email получателю {{email}}': 'Ошибка при отправке email получателю {{email}}',

    /** labels */
    'Введите email:': 'Введите email:',
    'Введите пароль:': 'Введите пароль:',
    'Забыли пароль?': 'Забыли пароль?',
    'Регистрация': 'Регистрация',
    'Войти': 'Войти',
    'Регистрация в системе': 'Регистрация в системе',
    'Введите пароль еще раз:': 'Введите пароль еще раз:',
    'Завершить регистрацию': 'Завершить регистрацию',
    'Запросить пароль': 'Запросить пароль',
    'Попробуйте снова ввести логин и пароль или нажмите "Забыли пароль?"': 'Попробуйте снова ввести логин и пароль или нажмите "Забыли пароль?"',
    'Через несколько секунд Вы будете перенаправлены на нужный ресурс': 'Через несколько секунд Вы будете перенаправлены на нужный ресурс',

    /** validation error */
    'Необходимо заполнить поле': 'Необходимо заполнить поле',
    'В поле введено мало символов!': 'В поле введено мало символов!',
    'Необходимо ввести корректный email': 'Необходимо ввести корректный email',
    'Поле не совпадает с введенным паролем': 'Поле не совпадает с введенным паролем',

    /** server message title */
    'Ответ от сервера при авторизации:': 'Ответ от сервера при авторизации: ',
    'Ответ от сервера при регистрации:': 'Ответ от сервера при регистрации: ',
    'Ответ от сервера при восстановление пароля:': 'Ответ от сервера при востановление пароля: ',
    'Ответ от сервера при смене пароля:': 'Ответ от сервера при смене пароля: ',

    /** success message */
    'Вы успешно вошли в систему': 'Вы успешно вошли в систему',
    'Пароль изменен, через несколько секунд Вы будете перенаправлены': 'Пароль изменен, через несколько секунд Вы будете перенаправлены',
    'Вы успешно зарегистрировались': 'Вы успешно зарегистрировались',
    'На адрес электронной почты {{email}} выслано письмо для окончания регистрации': 'На адрес электронной почты <span style="color: var(--primary);">{{email}}</span> выслано письмо для окончания регистрации',
    'Запрос обработан': 'Запрос обработан',
    'На адрес электронной почты {{email}} выслано письмо с инструкциями по сбросу пароля': 'На адрес электронной почты <span style="color: var(--primary);">{{email}}</span> выслано письмо с инструкциями по сбросу пароля',


    /** error messages */
    'Ошибка при авторизации:': 'Ошибка при авторизации: ',
    'Не верный логин или пароль': 'Не верный логин или пароль',
    'Ошибка при регистрации': 'Ошибка при регистрации',
    'Ошибка при регистрации:': 'Ошибка при регистрации: ',
    'Ошибка': 'Ошибка',
    'Ошибка при запросе восстановления пароля:': 'Ошибка при запросе восстановления пароля: ',
    'Ошибка при смене пароля': 'Ошибка при смене пароля',
    'Ошибка при смене пароля:': 'Ошибка при смене пароля: ',

    /** email templates */
    confirmEmailTemplate:
        `
            <h3> Здравствуйте! </h3>
            <p> 
                Для подтверждения регистрации на сайте www.${ Config.address.HOST }, перейдите по 
                <b>
                    <a 
                        href="${ Config.address.PROTOCOL }://${ Config.address.HOST }${ Config.address.PORT
                            ? ':' + Config.address.PORT
                            : ''}/confirm_email/{{hash}}">
                            ссылке
                   </a>
                </b>. 
            </p>
            <p> Если Вы не регистрировались на сайте www.${ Config.address.HOST }, просто проигнорируйте данное письмо.</p>
        `,
    accountLogin:
        `
                <h3> Здравствуйте! Вы вошли в аккаунт на сайте www.${APP.address.HOST}</h3>
                
                <p> 
                    Если это были не Вы, 
                    <b>
                        <a 
                            href="${APP.address.PROTOCOL}://${APP.address.HOST}${APP.address.PORT
                            ? ':' + APP.address.PORT
                            : ''}/change-password">
                                смените пароль
                       </a>
                    </b>.
                </p>
                
        `,
    restorePassword:
        `
            <h3> Здравствуйте! </h3>
            <p> 
                Вы запросили восстановление доступа к сайту www.${APP.address.HOST}, для этого перейдите по 
                <b>
                    <a 
                        href="${APP.address.PROTOCOL}://${APP.address.HOST}${APP.address.PORT
                            ? ':' + APP.address.PORT
                            : ''}/reset-password/{{hash}}">
                            ссылке
                   </a>
                </b>.
            </p>
            <p> Если Вы не запрашивали восстановление доступа к сайту www.${APP.address.HOST}, просто проигнорируйте данное письмо.</p>
        `
}
