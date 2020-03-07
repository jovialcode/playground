const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const entries = require('./config/entries');
const CONFIG = require('./config/config');

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
    mode: 'development',
    output: {
        path: `${CONFIG.WEBPACK_BUILD_RESOURCES}`,
        filename: '[name].js',
        publicPath: '/static/',
    },
    plugins: [
        ...htmlWebpackPlugins,
        new MiniCssExtractPlugin({
            //splitChunks나 비동기 import시 chunkFilename으로 이름 지정
            filename: '[name].css',
        }),
        //new BundleAnalyzerPlugin(),
    ],
    devServer: {
        historyApiFallback: true,
        progress: true,
        inline : true,
        clientLogLevel : 'info',
        publicPath: '/static/',
        port: CONFIG.DEV_SERVER_PORT,
        proxy: {
            "**": {
                target : `http://localhost:${CONFIG.BACKEND_SERVER_PORT}`,
                changeOrigin: true
            }
        }
    },
    // ts source-map 옵션
    devtool: 'inline-source-map',
};
