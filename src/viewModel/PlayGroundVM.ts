import {action, observable} from "mobx";

import {GAME} from "../type";

export default class PlayGroundVM {
	@observable private _currentGame : GAME;
	@observable private _gameList : GAME[];

	constructor() {
		this._currentGame = {
			id: 0,
			title: 'none'
		};
		this._gameList = [
			{
				id: 1,
				title: 'tutorial'
			},
			{
				id: 2,
				title: 'easy_game'
			},
			{
				id: 3,
				title: 'cat_lover'
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