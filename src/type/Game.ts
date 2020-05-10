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
	CAT_SHOOTER = 'CAT_SHOOTER'
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