import SmartController from './smart-controller.js'
import UsersModel from '../models/users-model'
import events from "../utils/emitters.js"

// import confirmEmail from '../../views/confirm-email.hbs'

export default class ConfirmEmailController extends SmartController{
    constructor(request, response) {
        super(request, response)
    }

    optionsRender = {
        title: 'Подтверждение email',
        isConfirmSuccess: false
    }

    layout = 'confirm-email.hbs'

    confirm() { // проверка хеша
        // 1. Проверить найден ли пользователь
        UsersModel.findOne({
            hash: this.request.params.hash,
            confirmEmail: false
        })
            .then(user => {
                // console.log(user)
                if (user) {
                    // 2. Если пользователь найден и email не подтвержден, сменить временну роль на постоянную и подтвердить email
                    user.roles = user.roles.map(role => {
                        if (role === 'temp-role') {
                            return 'user'
                        }
                    })

                    user.confirmEmail = true

                    new UsersModel(user).save().catch(error => events.emit('onError', 'Ошибка при попытке сменить роль пользователя: ', error))
                    this.optionsRender.isConfirmSuccess = true
                } else {
                    // 3. Иначе вернуть ошибку
                    this.optionsRender.isConfirmSuccess = false
                }

                // 4. Отрендерить
                return this.render()
            })
            .catch(error => events.emit('onError', 'Ошибка при попытке подтвердить email: ', error))
    }
}
