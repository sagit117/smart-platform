import SmartController from './smart-controller.js'
// import configurator from '../../views/configurator.hbs'

export default class ConfiguratorController extends SmartController{
    constructor(request, response) {
        super(request, response)
    }

    optionsRender = {
        title: 'Конфигуратор',
    }

    layout = 'configurator.hbs'
}
