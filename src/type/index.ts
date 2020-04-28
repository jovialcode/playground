export type METHOD_TYPE =
	'get'
	| 'post';

export type NAVI_TYPE =
	'MAIN'
	| 'PLAY_GROUND'
	| 'LIFE'
	| 'FLICK'


export interface IMainRs {
	title : string;
	subTitle : string;
	keyword : string[];
	createDate : string;
	content : string;
}