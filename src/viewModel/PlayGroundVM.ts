import {action, computed, observable} from "mobx";

import {GAME_LIST, GAME_TYPE, RANK_TYPE} from "@type";
import GameManager from "../core/GameManager";
import ScoreManager from "../core/ScoreManager";
import BGMManager from "../core/BGMManager";

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
			},
			{
				id: 3,
				title: GAME_LIST.CAT_SHOOTER
			},
			{
				id: 4,
				title: GAME_LIST.MOTHERS_THEOREM
			}
		];
	}

	get currentGame(): GAME_TYPE {
		return this._currentGame;
	}

	get gameList(): GAME_TYPE[] {
		return this._gameList;
	}

	get gameRank(): RANK_TYPE[] {
		return [
			{
				"name": "박명언1",
				"score": 12345
			},
			{
				"name": "박명언2",
				"score": 12245
			},
			{
				"name": "박명언3",
				"score": 12145
			}
		];
	}

	changeGame(game : GAME_TYPE){
		this._currentGame = game;
		GameManager.init(game);
		ScoreManager.init();
		BGMManager.init(game);
	}

	@computed
	get gameScore():number {
		return ScoreManager.score;
	}
}
