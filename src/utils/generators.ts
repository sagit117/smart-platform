export function randomKeyGenerator(): string {
    // Генератор случайного хеша
    const letters: string = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let word: string = ''

    for (let i = 0; i < 15; i++) {
        word += letters.charAt(Math.floor(Math.random() * letters.length))
    }

    const randomKey: string = word.substr(0, 5) + '-' + word.substr(5, 5) + '-' + word.substr(10, 5)

    return randomKey.toUpperCase()
}
