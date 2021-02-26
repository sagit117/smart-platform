const path = require('path')
const { VueLoaderPlugin } = require("vue-loader");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        login: './public/js/loginApp.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './build-server/dist'),
        clean: true
    },
    mode: 'development',
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
        extensions: ['.tsx', '.ts', '.js', '.css', '.vue', '.json'],
    },
    plugins: [
        new VueLoaderPlugin(),
        // new CleanWebpackPlugin()
    ],
}
