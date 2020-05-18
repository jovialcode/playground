export type GAME_TYPE = {
	id: number;
	title: string;
}

export type RANK_TYPE = {
	name: string;
	score: number;
}

export enum GAME_LIST{
	NONE = 'NONE',
	FRUIT_CRUSH = 'FRUIT_CRUSH',
	CAT_LOVER = 'CAT_LOVER',
	CAT_SHOOTER = 'CAT_SHOOTER',
	MOTHERS_THEOREM = 'MOTHERS_THEOREM'
}

export type GAME_LIST_TYPE =
	'NONE'
	|'FRUIT_CRUSH'
	|'CAT_LOVER'
	|'CAT_SHOOTER'

export interface IBaseGame{
	getConfig : () => {};
	getWidth: () => {};
	getHeight: () => {};
};

export enum BGM_LIST{
	NONE = 'NONE',
	FRUIT_CRUSH = 'FRUIT_CRUSH',
	CAT_LOVER = 'CAT_LOVER',
	CAT_SHOOTER = 'CAT_SHOOTER',
	MOTHERS_THEOREM = 'MOTHERS_THEOREM'
}

export type BGM_TYPE = {
	title: string;
	gameName: GAME_LIST_TYPE;
	src : string
}