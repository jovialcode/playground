const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CONFIG = require('./config');

module.exports = {
    mode: 'development',
    output: {
        path: `${CONFIG.FRONT_BUILD_RESOURCES}`,
        filename : 'app.js',
        publicPath: "/"
    },
    devServer: {
        historyApiFallback: true,
        progress: true,
        inline : true,
        clientLogLevel : 'info',
        publicPath: '/',
        port: CONFIG.DEV_SERVER_PORT,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css',
            ignoreOrder: true
        }),
    ],
};