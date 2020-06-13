import Phaser from 'phaser'

import GameModel from "../model/GameModel";
import {GAME_LIST, GAME_TYPE, IBaseGame} from "@type";

import FruitCrush from "../service/game/fruitCrush/FruitCrush";
import CatShooter from "../service/game/catShooter/CatShooter";
import MothersTheorem from "../service/game/theorem/MothersTheorem";
import CatLand from "../service/game/catLand/CatLand";

class GameManager{
    private _gameModel : GameModel | null; //랭킹 정보 불러올 모델, 중간 세이브 되려나?
    private _currentOnGame : Phaser.Game | null; //현재 실행 중인 게임, 이건 Phaser Game 객체임.
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
        if(this._currentOnGame) this._currentOnGame.destroy(true);
        this._gameModel = null;
        this._currentOnGame = null;
        this._game = null;
    }

    init(game : GAME_TYPE){
        this.destroy();
        switch(game.title){
            case GAME_LIST.FRUIT_CRUSH:{
                this._game = new FruitCrush();
                break;
            }
            case GAME_LIST.CAT_SHOOTER: {
                this._game = new CatShooter();
                break;
            }
            case GAME_LIST.MOTHERS_THEOREM: {
                this._game = new MothersTheorem();
                break;
            }
            case GAME_LIST.CAT_LAND: {
                this._game = new CatLand();
                break;
            }
            default :{
                //NONE일때 처리해야함
            }
        }
        this.run();
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
