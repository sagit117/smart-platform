const path = require('path')
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    entry: {
        login: './public/js/loginApp.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css'],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
}
