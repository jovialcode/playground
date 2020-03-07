const CONFIG = require('./config');

const entries = {
    a: {
        entry: `${CONFIG.JS_FILE_PATH}/react/A.tsx`,
        //template: `${CONFIG.TEMPLATE_FILE_PATH}/page/pageA.html`
    },
    b: {
        entry: `${CONFIG.JS_FILE_PATH}/react/B.tsx`,
        //template: `${CONFIG.TEMPLATE_FILE_PATH}/page/pageB.html`
    },
    c: {
        entry: `${CONFIG.JS_FILE_PATH}/no_react/C.ts`,
        //template: `${CONFIG.TEMPLATE_FILE_PATH}/page/pageB.html`
    },
};

module.exports = entries;
