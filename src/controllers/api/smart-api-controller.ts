import { Request, Response } from "express"

export default class SmartApiController {
    protected request: Request
    protected response: Response
    protected objectAccess: { access: true, useLogin: false } | undefined

    constructor(request, response) {
        this.request = request
        this.response = response

        this.objectAccess = this.request?.dataMain?.accessRoute
    }

    errorHandler(message = 'access denied') {
        return this.response.status(403).send({ message, success: false })
    }
}
