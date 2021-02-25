const path = require('path')

const { NODE_ENV = 'production' } = process.env;

module.exports = {
    entry: {
        server: './src/server.js'
    },
    mode: NODE_ENV,
    target: 'node',
    output: {
        path: path.resolve(__dirname, '/build-server'),
        filename: '[name].js'
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.hbs$/,
                loader:  "handlebars-loader",
            },
            {
                // Transpiles ES6-8 into ES5
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
}
