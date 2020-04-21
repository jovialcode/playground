const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CONFIG = require('./config');

module.exports = {
    mode: 'development',
    output: {
        path: `${CONFIG.FRONT_BUILD_RESOURCES}`,
        filename : 'app.js',
        publicPath: "/"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css',
            ignoreOrder: true
        }),
    ],
};