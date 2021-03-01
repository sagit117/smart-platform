import { Request, Response} from "express"

import SmartController from './smart-controller'

import APP from '../configs/server-config'
import { setDictionary } from '../dictionary/connect-dictionary' // словарь переводов

const Lang = setDictionary(APP.LANG)
const routeTitles = Lang.getRouteTitles()

export default class ConfiguratorController extends SmartController{
    constructor(request: Request, response: Response) {
        super(request, response)
    }

    optionsRender = {
        title: routeTitles.configurator
    }

    layout = 'configurator.hbs'
}
