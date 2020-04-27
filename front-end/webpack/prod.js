const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CONFIG = require('./config');

module.exports = {
    output: {
        path: `${CONFIG.FRONT_BUILD_RESOURCES}`,
        filename : '[name].js',
    },
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin({
            //splitChunks나 비동기 import시 chunkFilename으로 이름 지정
            chunkFilename: '[name].[contenthash].css',
            filename: '[name].[contenthash].css',
        }),
    ],
};
