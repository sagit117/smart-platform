import rus from './rus'

export const LANGUAGES = {
    rus
}

export default class Lang {
    protected _lang

    constructor(lang: string = 'rus') {
        if (LANGUAGES.hasOwnProperty(lang)) {
            this._lang = LANGUAGES[lang]
        } else {
            this._lang = LANGUAGES.rus
        }
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

