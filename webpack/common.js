const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CONFIG = require('./config');

module.exports = {
    entry: {
        polyfill: ['@babel/polyfill'],
        app: `${CONFIG.JS_FILE_PATH}/App.tsx`
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', 'scss'],
        plugins: [new TsconfigPathsPlugin({configFile: __dirname + '/../tsconfig.json'})],
        alias: {
            $commonCss: path.resolve(__dirname, '../src/common/css/')
        }
    },
    module: {
        rules: [
            {
                test: /\.js|ts(x?)$/,
                include: [path.resolve(__dirname, '../src')],
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss|css$/,
                include: [path.resolve(__dirname, '../src')],
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                            sourceMap: true,
                        },
                    },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
                loader: 'url-loader',
                options: {
                    fallback: 'file-loader',
                    name: '[name].[ext]?[hash]',
                },
            },
        ],
    },
    optimization: {
        minimizer: [new TerserPlugin()],
        splitChunks: {
            name: 'vendors',
            chunks: 'all',
        },
    },
};
