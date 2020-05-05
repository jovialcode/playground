export type GAME_TYPE = {
	id: number;
	title: string;
}

export enum GAME_LIST{
	NONE = 'NONE',
	TUTORIAL = 'TUTORIAL',
	FRUIT_CRUSH = 'FRUIT_CRUSH'
}

export type GAME_LIST_TYPE =
	'NONE'
	|'TUTORIAL'
	|'FRUIT_CRUSH'