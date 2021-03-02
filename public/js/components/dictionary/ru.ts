export default class RU {
    private _labels = {
        inputEmail: 'Введите email:',
        inputPassword: 'Введите пароль:',
        registration: 'Регистрация',
        entry: 'Войти',
        regOfSystem: 'Регистрация в системе',
        confirmPassword: 'Введите пароль еще раз:',
        endRegistration: 'Завершить регистрацию'
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
            registry: 'Ответ от сервера при регистрации: '
        }
    }

    private _errors = {
        auth: 'Ошибка при авторизации: ',
        registryTitle: 'Ошибка при регистрации',
        registry: 'Ошибка при регистрации: '
    }

    private _success = {
        auth: 'Вы успешно зарегистрировались',
        sendEmailByAuth(email: string = ''): string {
            return `На адрес электронной почты <span style="color: var(--primary);">${email}</span> выслано письмо для окончания регистрации`
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
