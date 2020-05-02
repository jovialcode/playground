import {action, observable} from "mobx";

import {GAME_TYPE} from "../type";

export default class PlayGroundVM {
	@observable private _currentGame : GAME_TYPE;
	@observable private readonly _gameList : GAME_TYPE[];

	constructor() {
		this._currentGame = {
			id: 0,
			title: 'None'
		};
		this._gameList = [
			{
				id: 1,
				title: 'tutorial'
			},
			{
				id: 2,
				title: 'easyGame'
			},
			{
				id: 3,
				title: 'catLover'
			},
		];
	}


	get currentGame(): GAME_TYPE {
		return this._currentGame;
	}

	get gameList(): GAME_TYPE[] {
		return this._gameList;
	}

	changeGame(game : GAME_TYPE){
		this._currentGame = game;
	}
}