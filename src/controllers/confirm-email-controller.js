import SmartController from './smart-controller.js'
import UsersModel from '../models/users-model.js'

export default class ConfirmEmailController extends SmartController{
    constructor(request, response) {
        super(request, response)
    }

    optionsRender = {
        title: 'Подтверждение email',
    }

    layout = 'confirm-email.hbs'

    confirm() {
        // проверка хеша
        UsersModel.findOne({ hash: this.request.params.hash })
            .then(user => {
                // 1. TODO: Проверить найден ли пользователь
                console.log(user)

                // 2. TODO: Если пользователь найден и роль временная, сменить временну роль на постоянную

                // 3. TODO: Иначе вернуть ошибку

                // 4. Отрендерить
                return this.render()
            })
            .catch(error => {

            })
    }
}
