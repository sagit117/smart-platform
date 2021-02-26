export default {
    address: {
        HOST: process.env.NODE_ENV === 'production' ? 'production-host' : 'localhost', // TODO: поменять на продакшене
        PORT: 3333,
        PROTOCOL: 'http',
    },
    secure: {
        KEY_FOR_COOKIE: 'shop4secure-token-for-cookies',
        KEY_FOR_JWT: 'shop4secure-token-for-jwt'
    },
    connect: { // связь с монго ДБ
        URL: 'mongodb://localhost:27017/smart_shop'
    },
    cookie: {
        COOKIE_SECURE: false // false - http || true - https
    }
}
