export default class Lang {
    protected _lang: string

    constructor(lang: string = 'rus') {

        (async () => {
            // @ts-ignore
            const L = await import(`./${lang}`)
            this._lang = L.default
        })()
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

