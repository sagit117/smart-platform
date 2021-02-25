const path = require('path')
// const HandlebarsPlugin = require("handlebars-webpack-plugin");

const {
    NODE_ENV = 'production',
} = process.env;

module.exports = {
    entry: './src/server.ts',
    mode: NODE_ENV,
    target: 'node',
    output: {
        path: path.resolve(__dirname, '/build-server'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.hbs'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.handlebars$/,
                loader:  "handlebars-loader",
                // query: {
                //     partialDirs: [
                //         path.join(__dirname, 'views', 'partials')
                //     ],
                //     // helperDirs: [
                //     //     path.join(__dirname, 'views', 'helpers')
                //     // ]
                // }
            }
        ]
    },
}
