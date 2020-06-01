import {BGM_LIST, IBaseGame} from "@type";
import BootScene from "./scene/BootScene";
import GameScene from "./scene/GameScene";
import GameOverScene from "./scene/GameOverScene";

export default class CatShooter implements IBaseGame{
    private _title: string;
    private _height: number;
    private _width: number;
    private _physics: object;
    private _backgroundColor: string;
    private _bgm : BGM_LIST;
    private _input;

    private _scene: ReadonlyArray<Phaser.Scene>;

    constructor() {
        this._title = 'CatShooter';
        this._backgroundColor = '#000000';

        this._height = 700;
        this._width = 792;

        this._bgm = BGM_LIST.CAT_SHOOTER;

        this._physics = {
            default: 'arcade',
            arcade: {
                debug: true,
                gravity: { y: 0 },
                setBounds: {
                    width: 700,
                    height: 700
                }
            }
        };

        this._input = {
            keyboard: true
        };

        this._scene = [new BootScene(), new GameScene(), new GameOverScene()]
    }
    destroy(){}

    getConfig(){
        let config : {} = {
            title : this._title,
            width : this._width,
            height : this._height,
            physics : this._physics,
            input : this._input,

            scene : this._scene
        };

        return config;
    }

    getHeight(){
        return this._height;
    };

    getWidth(){
        return this._width;
    };

    get bgm(): BGM_LIST {
        return this._bgm;
    }
};
