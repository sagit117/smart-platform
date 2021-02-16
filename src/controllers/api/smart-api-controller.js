export default class SmartApiController {
    constructor(request, response) {
        this.request = request
        this.response = response

        this.objectAccess = this.request.dataMain.accessRoute
    }
}
