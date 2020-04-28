const path = require('path');

module.exports = {
    //프론트 템플릿 경로
    FRONT_TEMPLATE_FILE_PATH : path.resolve(__dirname, '../public'),
    //백앤드 템플릿 경로
    TEMPLATE_FILE_PATH : path.resolve(__dirname, '../../src/main/resources/templates'),
    //Front_End JS 경로
    JS_FILE_PATH : path.resolve(__dirname, '../src/'),
    //프론트 빌드 경로
    FRONT_BUILD_RESOURCES : path.resolve(__dirname, '../build/'),
    //프론트 정적 경로
    FRONT_STATIC_RESOURCES : path.resolve(__dirname, '../public'),
    //웹팩 빌드 ROOT 경로
    WEBPACK_BUILD_RESOURCES : path.resolve(__dirname, '../../src/main/resources/'),
    //데브 서버 포트
    DEV_SERVER_PORT : 8082
};
