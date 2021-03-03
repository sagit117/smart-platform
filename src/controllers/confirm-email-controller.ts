import { Request, Response} from "express"

import SmartController from './smart-controller'
import UsersModel from '../models/users-model'
import events from "../utils/emitters"

import { routeTitles, dataBaseErrorMessage } from '../utils/language'

export default class ConfirmEmailController extends SmartController{
    constructor(request: Request, response: Response) {
        super(request, response)
    }

    optionsRender = {
        title: routeTitles.confirmEmail,
        isConfirmSuccess: false
    }

    layout = 'confirm-email.hbs'

    confirm() { // проверка хеша
        /**
         * 1. Проверить найден ли пользователь
         */

        UsersModel.findOne({
            hash: this.request.params.hash,
            confirmEmail: false
        })
            .then(async user => {
                if (user && Array.isArray(user.roles)) {

                    // =================

                    /**
                     * 2. Если пользователь найден и email не подтвержден,
                     *    сменить временну роль на постоянную и подтвердить email
                     */

                    // @ts-ignore
                    const roles: string[] = user.roles.map(role => {
                        if (role === 'temp-role') {
                            return 'user'
                        }
                    })

                    const { ok }: { ok: boolean } = await new UsersModel(user).updateOne({
                        roles,
                        confirmEmail: true
                    })
                        .catch(error => events.emit('onError', dataBaseErrorMessage.changeRoleUser, error))

                    if (ok) this.optionsRender.isConfirmSuccess = true
                    else this.optionsRender.isConfirmSuccess = false

                    // =================

                } else {

                    /**
                     * 3. Иначе вернуть ошибку
                     */

                    this.optionsRender.isConfirmSuccess = false

                    // =================
                }

                /**
                 * 4. Отрендерить
                 */

                return this.render()

                // =================
            })
            .catch(error => events.emit('onError', dataBaseErrorMessage.confirmEmail, error))
    }
}
