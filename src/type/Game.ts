export type GAME_TYPE = {
	id: number;
	title: string;
}

export enum GAME_LIST{
	NONE = 'NONE',
	FRUIT_CRUSH = 'FRUIT_CRUSH',
	CAT_LOVER = 'CAT_LOVER'
}

export type GAME_LIST_TYPE =
	'NONE'
	|'FRUIT_CRUSH'
	|'CAT_LOVER'

export interface IBaseGame{
	getConfig : () => {};
	getWidth: () => {};
	getHeight: () => {};
};