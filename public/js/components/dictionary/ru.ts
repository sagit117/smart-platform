export default class RU {
    private _labels = {
        inputEmail: 'Введите email:',
        inputPassword: 'Введите пароль:',
        registration: 'Регистрация',
        entry: 'Войти',
        regOfSystem: 'Регистрация в системе',
        confirmPassword: 'Введите пароль еще раз:',
        endRegistration: 'Завершить регистрацию',
        relocate: 'Через несколько секунд Вы будете перенаправлены на нужный ресурс',
        errorAuth: 'Попробуйте снова ввести логин и пароль или нажмите "Забыли пароль?"',
        resetPass: 'Забыли пароль?',
        restorePass: 'Запросить пароль',
        changePass: 'Смена пароля'
    }

    private _validateMessages = {
        errorMessages: {
            require: 'Необходимо заполнить поле',
            minLength: 'В поле введено мало символов!',
            wrongEmail: 'Необходимо ввести корректный email',
            equalPassword: 'Поле не совпадает с введенным паролем'
        }
    }

    private _serverMessages = {
        titles: {
            auth: 'Ответ от сервера при авторизации: ',
            registry: 'Ответ от сервера при регистрации: ',
            restorePass: 'Ответ от сервера при востановление пароля: ',
            changePass: 'Ответ от сервера при смене пароля: '
        }
    }

    private _errors = {
        auth: 'Ошибка при авторизации: ',
        authTitle: 'Не верный логин или пароль',
        registryTitle: 'Ошибка при регистрации',
        registry: 'Ошибка при регистрации: ',
        restorePass: 'Ошибка',
        changePass: 'Ошибка при смене пароля',
    }

    private _success = {
        registry: 'Вы успешно зарегистрировались',
        auth: 'Вы успешно вошли в систему',
        requestSuccess: 'Запрос обработан',
        changePass: 'Пароль изменен, через несколько секунд Вы будете перенаправлены',
        sendEmailByAuth(email: string = ''): string {
            return `На адрес электронной почты <span style="color: var(--primary);">${email}</span> выслано письмо для окончания регистрации`
        },
        sendEmailByResetPass(email: string = ''): string {
            return `На адрес электронной почты <span style="color: var(--primary);">${email}</span> выслано письмо с инструкциями по сбросу пароля`
        }
    }

    // getters
    public getLabels() {
        return this._labels
    }

    public getErrorValidateMessages() {
        return this._validateMessages.errorMessages
    }

    public getTitilesServerMessages() {
        return this._serverMessages.titles
    }

    public getErrorMessages() {
        return this._errors
    }

    public getSuccessMessages() {
        return this._success
    }
}
