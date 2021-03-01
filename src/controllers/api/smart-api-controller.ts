import { Request, Response } from "express"

import { setDictionary } from '../../dictionary/connect-dictionary' // словарь переводов
import APP from '../../configs/server-config'

const Lang = setDictionary(APP.LANG)
const serverErrorMessage = Lang.getServerErrorMessage()

export default class SmartApiController {
    protected request: Request
    protected response: Response
    protected objectAccess: { access: true, useLogin: false } | undefined

    constructor(request: Request, response: Response) {
        this.request = request
        this.response = response

        this.objectAccess = this.request?.dataMain?.accessRoute
    }

    public errorHandler(message: string = serverErrorMessage.accessDenied) {
        return this.response.status(403).send({ message, success: false })
    }
}
