const path = require('path')
const nodeExternals = require('webpack-node-externals');

// const { NODE_ENV = 'production' } = process.env;

module.exports = {
    entry: {
        server: './src/server.js'
    },
    mode: 'development', // TODO:  поменять на проде
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, './build-server'),
        filename: '[name].cjs'
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
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
}
