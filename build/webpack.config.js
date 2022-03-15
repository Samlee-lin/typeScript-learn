const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path')

module.exports =  {
    entry: './src/index.ts',  //入口文件
    output: {
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js','.ts','.tsx']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    devtool: process.env.NODE_ENV === 'production'? false : 'inline-source-map',
    devServer: {
        static: {
            directory: './dist'
        },
        // stats: 'errors-only',
        compress: false,
        host: 'localhost',
        port: '8888'
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./dist']
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}