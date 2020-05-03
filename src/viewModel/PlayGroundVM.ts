import {action, observable} from "mobx";

import {GAME} from "../type";

export default class PlayGroundVM {
	@observable private _currentGame : GAME;
	@observable private _gameList : GAME[];

	constructor() {
		this._currentGame = {
			id: 0,
			title: 'NONE'
		};
		this._gameList = [
			{
				id: 1,
				title: 'TUTORIAL'
			},
			{
				id: 2,
				title: 'EASY_GAME'
			},
			{
				id: 3,
				title: 'CAT_LOVER'
			},
		];
	}

	get currentGame(): GAME {
		return this._currentGame;
	}

	get gameList(): GAME[] {
		return this._gameList;
	}

	changeGame(game : GAME){
		this._currentGame = game;
	}
}