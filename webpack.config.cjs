const path = require('path')

module.exports = {
    entry: {
        login: ('./public/js/login.js'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
    },
}
