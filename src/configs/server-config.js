export default {
    address: {
        HOST: 'localhost',
        PORT: 3333,
        PROTOCOL: 'http',
    },
    secure: {
        KEY_FOR_COOKIE: 'shop4secure-token-for-cookies',
        KEY_FOR_JWT: 'shop4secure-token-for-jwt'
    },
    connect: { // связь с монго ДБ
        URL: 'mongodb://localhost:27017/smart_shop'
    }
}
