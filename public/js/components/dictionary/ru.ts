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
        errorMessages: {
            auth: 'Ответ от сервера при авторизации: '
        }
    }

    // getters
    public getLabels() {
        return this._labels
    }

    public getErrorValidateMessages() {
        return this._validateMessages.errorMessages
    }

    public getErrorServerMessages() {
        return this._serverMessages.errorMessages
    }
}
