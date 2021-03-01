import RU from './ru'

interface IDictionary extends RU {
}

const LANG = {
    RU: new RU()
}

export function setDictionary(lang: string = 'RU'): IDictionary {
    return LANG[lang.toUpperCase()]
}
