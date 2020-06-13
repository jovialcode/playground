import {action, observable} from "mobx";

import GameRepository from "../repository/GameRepository";
import {GAME_TYPE, LOAD_TYPE} from "@type";

export default class GameModel{
    private _currentGame : GAME_TYPE;
    @observable private _isLoading : LOAD_TYPE;
    @observable private _data :any;

    constructor(game : GAME_TYPE) {
        this._currentGame = game;
        this._isLoading = 'NONE';
        this.load();
    }

    @action
    load(){
        this._isLoading = 'LOADING';
        (async () => {
            try{
                const rs = await GameRepository.loadGame(this._currentGame.title);
                const data = rs.data;

                this._data = data;
                this._isLoading = 'DONE';
            }catch (e) {
                //TODO 개인적으로 여기에 Logger 써서 log 파일 만들고 싶음.
                console.log(e);
            }
        })();
    }


    get currentGame(): GAME_TYPE {
        return this._currentGame;
    }

    get isLoading(): LOAD_TYPE {
        return this._isLoading;
    }

    get gameConfig(): any {
        return this._data;
    }
}