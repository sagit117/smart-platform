export interface IValidation { // Интерфейс для объекта валидации
    require?: {
        errorMessage?: string,
        method?: Require,
        isValid?: boolean
    }
    minLength?: {
        value?: number
        errorMessage?: string,
        method?: MinLength,
        isValid?: boolean
    },
    email?: {
        errorMessage?: string,
        method?: Email,
        isValid?: boolean
    },
    equal?: {
        value?: any,
        errorMessage?: string,
        method?: Equal,
        isValid?: boolean
    }
}

// ValidateMethods types
type Require = (value: string) => boolean
type MinLength = (value: string, length?: number) => boolean
type Email = (value: string) => boolean
type Equal = (value: string | number, expectValue: string | number) => boolean
type ValidateMethods = Require | MinLength | Email | Equal
// other types
type GetIsValid = (validator: IValidation) => boolean
type GetMethod = (method: ValidateMethods, ...args: [string, number]) => boolean

// выполняет метод валидации и возвращает отвалидированный объект
export function isValid(validation: IValidation, valueField: string): IValidation {
    const keys: string[] = Object.keys(validation || {})
    const getMethod: GetMethod = (method, ...args): boolean => method ? method(...args) : true

    keys.map(key => validation[key].isValid = getMethod(validation[key].method, valueField, validation[key].value))

    return validation
}

// проверка корректного заполнения полей
export function checkValid(objectData: object): boolean {
    let isValid: boolean = true
    const keys: string[] = Object.keys(objectData || {})

    const getIsValid: GetIsValid = (validator) => {
        const keysValidator: string[] = Object.keys(validator || {})
        let valid: boolean = true

        keysValidator.forEach(key => {
            if (validator[key]?.isValid === false) valid = false
        })

        return valid
    }

    keys.forEach(key => {
        if (!getIsValid(objectData[key]?.validation)) isValid = false
    })

    return isValid
}

// блок с функциями валидации
export const require: Require = (value) => !!value.trim()
export const minLength: MinLength = (value, length) => value.length >= (length || 0)
export const email: Email = (value) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(value)
export const equal: Equal = (value, expectValue) => expectValue ? value === expectValue : true
