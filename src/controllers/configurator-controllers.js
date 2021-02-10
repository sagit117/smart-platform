import SmartController from './smart-controllers.js'

export default class Configurator extends SmartController{
    constructor(request, response) {
        super(request, response)
    }

    optionsRender = {
        // layout: 'Configurator',
        title: 'Конфигуратор',
    }

    layout = 'configurator.hbs'
}