import path from 'path';

export const PROJECT_CONFIG = {
	MODE : 'DEV',
	VIEW_MODE : 'WHITE'
};

export const API_CONFIG = {
	AUTH_SERVER : 'localhost:8090/api/user/' // 인증 서버
};

/*
* Description:
* 	DEV 환경에서 Article path
* */
export const DEV_ARTICLE_PATH = path.resolve(__dirname, '/data/article');
export const DEV_GAME_CONFIG_PATH = path.resolve(__dirname, '/data/game');
export const ROOT_PATH = path.resolve(__dirname, '../');