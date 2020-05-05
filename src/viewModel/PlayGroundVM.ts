import {action, observable} from "mobx";

import {GAME_LIST, GAME_TYPE} from "../type";
import GameManager from "../core/GameManager";

export default class PlayGroundVM {
	@observable private _currentGame : GAME_TYPE;
	@observable private _gameList : GAME_TYPE[];

	constructor() {
		this._currentGame = {
			id: 0,
			title: GAME_LIST.NONE
		};
		this._gameList = [
			{
				id: 1,
				title: GAME_LIST.CAT_LOVER
			},
			{
				id: 2,
				title: GAME_LIST.FRUIT_CRUSH
			}
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
		GameManager.init(game);
	}
}