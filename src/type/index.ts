export type METHOD_TYPE =
	'get'
	| 'post';

export type LOAD_TYPE =
	'NONE'
	| 'LOADING'
	| 'DONE'

export type NAVI_TYPE =
	'MAIN'
	| 'PLAY_GROUND'
	| 'LIFE'
	| 'FLICK'
	| 'LIST'


export type GAME_TYPE =
	'NONE'
	| 'TUTORIAL'

export type GAME = {
	id: number;
	title: string;
}

export interface IMainRs {
	title : string;
	subTitle : string;
	keyword : string[];
	createDate : string;
	content : string;
}

export interface IGameRs {
	title : string;
	subTitle : string;
	keyword : string[];
	createDate : string;
	content : string;
}

