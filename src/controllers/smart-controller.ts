import { Request, Response } from "express"

export default class SmartController {
    protected request: Request;
    protected response: Response;
    protected objectAccess: { access: true, useLogin: false } | undefined;

    constructor(request: Request, response: Response) {
        this.request = request
        this.response = response

        this.objectAccess = this.request.dataMain?.accessRoute
    }

    public optionsRender = {
        /**
         * свойства переданные в рендер
         * title: '',
         * layout: '...hbs'
         * ...
         * */
    }

    public layout = ''

    public render() {
        if (!this._checkAccessRoute()) {
            this.layout = this._checkUseLogin() ? 'login.hbs' : 'access-denied.hbs'
        }

        return this.response.status(200).render(this.layout, this.optionsRender)
    }

    private _checkAccessRoute() {
        return this.objectAccess?.access
    }

    private _checkUseLogin() {
        return this.objectAccess?.useLogin
    }

}
