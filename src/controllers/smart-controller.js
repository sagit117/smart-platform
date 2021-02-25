import login from '../../views/login.hbs'
import accessDenied from '../../views/access-denied.hbs'

export default class SmartController {
    constructor(request, response) {
        this.request = request
        this.response = response

        this.objectAccess = this.request.dataMain.accessRoute
    }

    // optionsRender = {
    //     /**
    //      * свойства переданные в рендер
    //      * title: '',
    //      * layout: '...hbs'
    //      * ...
    //      * */
    // }

    layout = ''

    render() {
        if (!this._checkAccessRoute()) {
            this.layout = this._checkUseLogin() ? login : accessDenied
        }

        return this.response.status(200).render(this.layout, this.optionsRender)
    }

    _checkAccessRoute() {
        return this.objectAccess?.access
    }

    _checkUseLogin() {
        return this.objectAccess?.useLogin
    }

}
