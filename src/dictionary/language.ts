import RUS from './rus'

const LANG = {
    RUS
}

export default class Lang {
    protected _lang: string

    constructor(lang: string = 'RUS') {
        this._lang = LANG[lang.toUpperCase()]()
    }

    public translate(message: string = '', args: object = {}): string {
        const replaceArgs = (msg: string): string => {
            Object.keys(args).forEach(key => {
                msg = msg.replace(`{{${key}}}`, args[key])
            })
            return msg
        }

        if (!this._lang.hasOwnProperty(message.trim())) {
            return replaceArgs(message.trim())
        } else {
            return replaceArgs(this._lang[message.trim()])
        }
    }
}

