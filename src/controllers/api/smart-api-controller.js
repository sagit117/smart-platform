export default class SmartApiController {
    constructor(request, response) {
        this.request = request
        this.response = response

        this.objectAccess = this.request.dataMain.accessRoute
    }

    errorHandler(message = 'access denied') {
        return this.response.status(403).send({ message })
    }
}
