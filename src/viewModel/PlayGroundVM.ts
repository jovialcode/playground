import {computed, observable} from "mobx";

import {BGM_STATE_TYPE, GAME_LIST, GAME_TYPE, RANK_TYPE} from "@type";
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

	get bgmState(): BGM_STATE_TYPE{
		return BGMManager.bgmState;
	}

	get bgmVolume() : number{
		return BGMManager.bgmVolume;
	}

	changeBGMState(v : BGM_STATE_TYPE) : void{
		if(v === BGM_STATE_TYPE.MUTE) BGMManager.mute();
		else if(v === BGM_STATE_TYPE.PLAY)BGMManager.resume();
	}

	changeBGMVolume(volume : number){
		if(BGMManager.bgmState !== BGM_STATE_TYPE.PLAY) return alert('실행중인 BGM이 없습니다.');
		if(volume < 0 || volume > 1) return alert('소리는 0 보다 작거나 9보다 클 수 없습니다.');
		BGMManager.bgmVolume = volume;
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
