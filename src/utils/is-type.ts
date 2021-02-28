function isNumber(value: string | number | undefined = ''): boolean {
    return typeof value === 'number' && isFinite(value)
}

export { isNumber }
