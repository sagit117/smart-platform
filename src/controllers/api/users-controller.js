import SmartApiController from './smart-api-controller.js'

export default class UsersApiController extends SmartApiController {
    constructor(request, response) {
        super(request, response)
    }

    registrationWithEmail() {
        /* регистрация пользователя по email
         * data = { email, password }
         **/

        const data = this.request.body

        // 1. TODO: Проверить анти-спам поле
        console.log(data)

        // 2. TODO: Проверить количество попыток регистрации с IP

        // 3. TODO: Проверить на корректность email

        // 4. TODO: Проверить на существование email

        // 5. TODO: Создать запись

        // 6. TODO: Выслать письмо для подтверждения email

        // 7. TODO: Логировать event

    }
}
