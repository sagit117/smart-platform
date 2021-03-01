import { Request, Response} from "express"

import SmartController from './smart-controller'

export default class ConfiguratorController extends SmartController{
    constructor(request: Request, response: Response) {
        super(request, response)
    }

    optionsRender = {
        title: 'Конфигуратор',
    }

    layout = 'configurator.hbs'
}
