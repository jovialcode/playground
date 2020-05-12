import Phaser from 'phaser'

import GameModel from "../model/GameModel";
import {GAME_LIST, GAME_TYPE, IBaseGame} from "../type";

import FruitCrush from "../service/game/fruitCrush/FruitCrush";
import CatShooter from "../service/game/catShooter/CatShooter";
import MothersTheorem from "../service/game/theorem/MothersTheorem";

class GameManager{
    private _gameModel : GameModel | null; //랭킹 정보 불러올 모델, 중간 세이브 되려나?
    private _currentOnGame : any; //현재 실행 중인 게임, 이건 Phaser Game 객체임.
    private _game : IBaseGame | null;
    private _commonConfig : {};

    constructor() {
        this._gameModel = null;
        this._currentOnGame = null;
        this._game = null;

        this._commonConfig = {
            type: Phaser.AUTO,
            parent: 'game'
        }
    }

    destroy(){
        this._gameModel = null;
        this._currentOnGame = null;
        this._game = null;
    }

    init(game : GAME_TYPE){
        switch(game.title){
            case GAME_LIST.FRUIT_CRUSH:{
                this._game = new FruitCrush();
                this.run();
                break;
            }
            case GAME_LIST.CAT_SHOOTER: {
                this._game = new CatShooter();
                this.run();
                break;
            }
            case GAME_LIST.MOTHERS_THEOREM: {
                this._game = new MothersTheorem();
                this.run();
                break;
            }
            default :{
                //NONE일때 처리해야함
            }
        }
    }

    combineConfig(config: {}){
        let gameConfig : Phaser.Types.Core.GameConfig = {
            ...this._commonConfig,
            ...config
        }
        return gameConfig;
    }

    stop(){

    }

    run(){
        if(!this._game) return;
        this._currentOnGame =  new Phaser.Game(this.combineConfig(this._game.getConfig()));
    }

    resume(){

    }

    save(){

    }

}
export default new GameManager();
