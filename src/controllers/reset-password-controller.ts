import SmartController from "./smart-controller";
import {Request, Response} from "express";

export default class ConfirmEmailController extends SmartController {
    constructor(request: Request, response: Response) {
        super(request, response)
    }

    layout = 'reset-password.hbs'
}
