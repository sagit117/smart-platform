function isNumber(value: string) {
    return typeof value === 'number' && isFinite(value)
}

export { isNumber }
