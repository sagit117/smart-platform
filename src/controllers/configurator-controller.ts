import { Request, Response} from "express"

import SmartController from './smart-controller'

import { routeTitles } from '../utils/language'

export default class ConfiguratorController extends SmartController{
    constructor(request: Request, response: Response) {
        super(request, response)
    }

    optionsRender = {
        title: routeTitles.configurator
    }

    layout = 'configurator.hbs'
}
