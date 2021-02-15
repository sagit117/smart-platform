interface ValidationInterface { // Интерфейс для объекта валидации
    require?: {
        errorMessage?: string,
        method?: any,
        isValid?: boolean
    }
    minLength?: {
        value?: number
        errorMessage?: string,
        method?: any,
        isValid?: boolean
    },
    email?: {
        errorMessage?: string,
        method?: any,
        isValid?: boolean
    },
    equal?: {
        value?: any,
        errorMessage?: string,
        method?: any,
        isValid?: boolean
    }
}

// выполняет метод валидации и возвращает отвалидированный объект
function isValid(validation: ValidationInterface, valueField): ValidationInterface {
    const keys: string[] = Object.keys(validation || {})
    const getMethod = (method, ...args) => method ? method(...args) : true

    keys.map(key => validation[key].isValid = getMethod(validation[key].method, valueField, validation[key].value))

    return validation
}

// проверка корректного заполнения полей
function checkValid(objectData: object): boolean {
    let isValid: boolean = true
    const keys: string[] = Object.keys(objectData || {})

    const getIsValid = (validator: ValidationInterface) => {
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
const require = (value: string) => !!value.trim()
const minLength = (value: string, length: number) => value.length >= (length || 0)
const email = (value: string) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(value)
const equal = (value: string | number, expectValue: string | number) => expectValue ? value === expectValue : true

export { require, minLength, isValid, email, equal, checkValid, ValidationInterface }
