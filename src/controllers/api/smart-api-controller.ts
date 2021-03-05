import { Request, Response } from "express"

// config
import Config from "../../configs/server-config"
import Lang from '../../dictionary/language'

const L = new Lang(Config.LANG)

export default class SmartApiController {
    protected request: Request
    protected response: Response
    protected objectAccess: { access: true, useLogin: false } | undefined

    constructor(request: Request, response: Response) {
        this.request = request
        this.response = response

        this.objectAccess = this.request?.dataMain?.accessRoute
    }

    public errorHandler(message: string = L.translate('В доступе отказано')) {
        return this.response.status(403).send({ message, success: false })
    }
}
