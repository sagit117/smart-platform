interface ValidationInterface { // Интерфейс для объекта валидации
    require?: {
        errorMessage?: string,
        method: any,
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
    }
}

function isValid(validation: ValidationInterface, valueField): ValidationInterface {
    const keys = Object.keys(validation)
    const getMethod = (method, ...args) => method ? method(...args) : true

    keys.map(key => validation[key].isValid = getMethod(validation[key].method, valueField, validation[key].value))

    return validation
}

const require = (value: string) => !!value.trim()

const minLength = (value: string, length: number) => value.length >= (length || 0)

const email = (value: string) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(value)

export { require, minLength, isValid, email, ValidationInterface }
