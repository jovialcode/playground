const path = require('path');
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
            chunkFilename: '[name].css',
            filename: '[name].css',
        }),
    ],
};
