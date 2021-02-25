const path = require('path')
const HandlebarsPlugin = require("handlebars-webpack-plugin");

const {
    NODE_ENV = 'production',
} = process.env;

module.exports = {
    entry: './src/server.ts',
    mode: NODE_ENV,
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.js', 'hbs'],
    },
    plugins: [
        new HandlebarsPlugin()
    ]
}
