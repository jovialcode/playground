import Phaser from 'phaser'
import {reaction} from "mobx";

import GameModel from "../model/GameModel";
import {GAME, LOAD_TYPE} from "../type";

import TutorialGame from "../service/game/TutorialGame";
import BaseGame from "../service/game/BaseGame";

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

    init(game : GAME){
        switch(game.title){
            case 'TUTORIAL':{
                this._game = new TutorialGame();
            }
            default :{

            }
        }
        this._gameModel = new GameModel(game);
        reaction(()=> this._gameModel?.isLoading,
            (loading)=>{
                if(loading === 'DONE'){
                    this.run();
                }
            })
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