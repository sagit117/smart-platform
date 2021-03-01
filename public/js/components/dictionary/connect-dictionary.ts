import RU from './ru'

interface IDictionary extends RU {
}

const LANG = {
    RU: new RU()
}

export function getDictionary(): IDictionary {
    const lang: string = localStorage.getItem('language') || 'RU'

    return LANG[lang.toUpperCase()] ?? LANG.RU
}

export function setDictionary(lang: string = 'RU'): void {
    localStorage.setItem('language', lang)
}

