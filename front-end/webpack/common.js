const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const entries = require('./config/entries');

module.exports = {
    entry: {
        polyfill: ['@babel/polyfill'],
        reset: './src/reset.css',
        //entries.js의 entry 목록 병합
        ...Object.keys(entries).reduce((prevEntries, entryKey) => {
            return {
                ...prevEntries,
                [entryKey]: entries[entryKey].entry,
            };
        }, {}),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
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
