export default class SmartController {
    constructor(request, response) {
        this.request = request
        this.response = response

        this.objectAccess = this.request.dataMain.accessRoute
    }

    optionsRender = {
        /**
         * свойства переданные в рендер
         * title: '',
         * layout: '...hbs'
         * ...
         * */
    }

    layout = ''

    render() {
        if (!this._checkAccessRoute()) {
            this.layout = this._checkUseLogin() ? 'login.hbs' : 'access-denied.hbs'
        }

        return this.response.status(200).render(this.layout, this.optionsRender)
    }

    _checkAccessRoute() {
        return this.objectAccess.accessRoute
    }

    _checkUseLogin() {
        return this.objectAccess.useLogin
    }

}