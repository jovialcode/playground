import Phaser from 'phaser'

import GameModel from "../model/GameModel";
import {GAME_LIST, GAME_TYPE} from "../type";

import Tutorial from "../service/game/Tutorial";
import BaseGame from "../service/game/BaseGame";
import FruitCrush from "../service/game/fruitCrush/FruitCrush";

class GameManager{
    private _gameModel : GameModel | null;
    private _runGame : any;
    private _game : BaseGame | null;

    constructor() {
        this._gameModel = null;
        this._game = null;
    }

    destroy(){
        this._gameModel = null;
    }

    init(game : GAME_TYPE){
        switch(game.title){
            case GAME_LIST.TUTORIAL:{
                this._game = new Tutorial();
                break;
            }
            case GAME_LIST.FRUIT_CRUSH:{
                this._game = new FruitCrush();
                break;
            }
            default :{
                //NONE일때 처리해야함
            }
        }
    }

    stop(){

    }

    run(){
        if(!this._game) return;
        this._runGame =  new Phaser.Game(this._game.config);
    }

    resume(){

    }

    save(){

    }

}
export default new GameManager();