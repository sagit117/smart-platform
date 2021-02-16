import SmartController from './smart-controller.js'

export default class ConfiguratorController extends SmartController{
    constructor(request, response) {
        super(request, response)
    }

    optionsRender = {
        // layout: 'Configurator',
        title: 'Конфигуратор',
    }

    layout = 'configurator.hbs'
}
