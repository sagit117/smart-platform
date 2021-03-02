import { Request, Response } from "express"

import { serverErrorMessage } from '../../utils/language'

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
