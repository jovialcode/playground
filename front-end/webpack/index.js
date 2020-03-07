const merge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./common');
const prodConfig = require('./prod');
const devConfig = require('./dev');
const devBuild = require('./devBuild');

module.exports = function buildConfig(env, argv) {
    const isOnDevelop = argv.mode !== 'production';
    const isDevBuild = argv.option === 'devBuild';

    console.log(path.resolve(__dirname, '../src'));
    console.log(argv.mode);

    if(isDevBuild){
        return merge(commonConfig, devBuild);
    }
    return merge(commonConfig, isOnDevelop ? devConfig : prodConfig);
};
