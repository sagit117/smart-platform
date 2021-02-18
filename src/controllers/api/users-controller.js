import SmartApiController from './smart-api-controller.js'
import RequestLogsModel from '../../models/request-log-model.js'

import LIMIT from '../../configs/limits-config.js'
import { testEmail } from "../../utils/validate.js";

export default class UsersApiController extends SmartApiController {
    constructor(request, response) {
        super(request, response)
    }

    async registrationWithEmail() {
        /* регистрация пользователя по email
         * data = { email, password }
         **/

        const data = this.request.dataMain.body

        // 1. Проверить анти-спам поле
        if (data.antiSpam) return this.errorHandler('В доступе отказано')

        // 2. Проверить количество попыток регистрации с IP за указанное время
        const getLastTryRegistration = IP => {
            return RequestLogsModel.find({ requestIP: IP }).sort({ date: 'desc', _id: -1 }).limit(2);
        }
        const records = await getLastTryRegistration(this.request.dataMain.requestIP) || [] // 2 записи последней регистрации по IP

        if (records.length === 2) {
            const delta = new Date() - new Date(records[1].date)
            // console.log(delta, new Date(), new Date(records[1].date))
            if ((delta / 1000 / 60) < LIMIT.limitTimeOfRegistration) return this.errorHandler('Перед повторной регистрацией должно пройти некоторое время')
        }

        // 3. Проверить на корректность email
        if (!testEmail(data.email)) return this.errorHandler('Введите корректный email')

        // 4. TODO: Проверить на существование email

        // 5. TODO: Создать запись

        // 6. TODO: Выслать письмо для подтверждения email

        // 7. TODO: Установить куки

        // 8. TODO: Логировать event

    }
}
