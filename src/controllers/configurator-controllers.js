export default class Configurator {
    constructor(request, response) {
        this.request = request
        this.response = response
    }

    optionsRender = {
        // layout: 'Configurator',
        title: 'Конфигуратор',
    }

    render() {
        return this.response.status(200).render('configurator.hbs', this.optionsRender)
    }
}