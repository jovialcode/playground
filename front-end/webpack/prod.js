const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CONFIG = require('./config');

function getEntryDirPath(entryFilePath) {
    if(typeof entryFilePath !== 'string') return new Error('올바르게 입력해주심이..?');
    let fileName;
    const dirPathRegex = CONFIG.JS_FILE_PATH;
    const extendReg = /\.js|ts(x?)$/;

    //1. 앞에 JS_FILE_PATH 자르고
    fileName = entryFilePath.replace(dirPathRegex,'');
    //2. 확장자 제거
    fileName = fileName.replace(extendReg, '');
    //3. '.' 제거
    fileName = fileName.replace('.', '');
    return fileName;
}
function generateHTMLPlugins([filename, { template, entry }]) {
    const entryName = filename;

    return new HtmlWebpackPlugin({
        template: template || `${CONFIG.TEMPLATE_FILE_PATH}/layout/script.html`,
        filename: `templates/script/${getEntryDirPath(entry)}_script.html`,
        chunks: [`${entryName}`, '[name].css', 'vendors', 'polyfill', 'reset'],
    });
}

const htmlWebpackPlugins = Object.entries(entries).map(generateHTMLPlugins);

module.exports = {
    output: {
        path: `${CONFIG.WEBPACK_BUILD_RESOURCES}`,
        filename: 'static/js/[name].[contenthash].js',
        // output이 "js" dir 밑에 있어 상위 dir로 publicPath 지정
        //publicPath: '../',
    },
    mode: 'production',
    plugins: [
        ...htmlWebpackPlugins,
        new MiniCssExtractPlugin({
            //splitChunks나 비동기 import시 chunkFilename으로 이름 지정
            chunkFilename: 'css/[name].[contenthash].css',
            filename: 'static/css/[name].[contenthash].css',
        }),
        // new BundleAnalyzerPlugin()
    ],
};
