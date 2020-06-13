import {BGM_LIST, IBaseGame} from "@type";
import BootScene from "./scene/BootScene";
import GameScene from "./scene/GameScene";

export default class CatLand implements IBaseGame{
    private _title: string;
    private _height: number;
    private _width: number;
    private _physics: object;
    private _backgroundColor: string;
    private _bgm : BGM_LIST;
    private _input : object;

    private _scene: ReadonlyArray<Phaser.Scene>;

    constructor() {
        this._title = 'CatLand';
        this._backgroundColor = '#000000';

        this._height = 371;
        this._width = 600;

        this._bgm = BGM_LIST.CAT_LAND;

        this._physics = {
            default: 'arcade',
            arcade: {
                debug: false,
                gravity: { y: 0 },
                setBounds: {
                    width: 600,
                    height: 371
                }
            }
        };

        this._input = {
            keyboard: true
        };

        this._scene = [new BootScene(), new GameScene()]
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
