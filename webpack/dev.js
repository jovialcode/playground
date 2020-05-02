const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CONFIG = require('./config');

module.exports = {
    mode: 'development',
    output: {
        path: `${CONFIG.FRONT_BUILD_RESOURCES}`,
        filename : '[name].js',
        publicPath: `${CONFIG.FRONT_BUILD_RESOURCES}/`
    },
    devServer: {
        historyApiFallback: true,
        progress: true,
        inline : true,
        clientLogLevel : 'info',
        publicPath: '/build',
        contentBase: [
            `${CONFIG.FRONT_STATIC_RESOURCES}/`,
            `${CONFIG.FRONT_STATIC_RESOURCES}/data/article/`,
            `${CONFIG.FRONT_STATIC_RESOURCES}/data/game/`
        ],
        port: CONFIG.DEV_SERVER_PORT
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        }),
    ],
};