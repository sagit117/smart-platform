import { Request, Response} from "express"

import SmartController from './smart-controller'

import Lang from "../dictionary/language"
import Config from "../configs/server-config"

const L = new Lang(Config.LANG)

export default class ConfiguratorController extends SmartController{
    constructor(request: Request, response: Response) {
        super(request, response)
    }

    optionsRender = {
        title: L.translate('Конфигуратор')
    }

    layout = 'configurator.hbs'
}
