import path from 'path';

export const PROJECT_CONFIG = {
	MODE : 'DEV',
	VIEW_MODE : 'WHITE'
};

/*
* Description:
* 	DEV 환경에서 Article path
* */
export const DEV_ARTICLE_PATH = path.resolve(__dirname, '/data/article');
export const ROOT_PATH = path.resolve(__dirname, '../');