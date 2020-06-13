import {IBaseGame} from "@type";
import BootScene from "./scene/BootScene";
import GameScene from "./scene/GameScene";

export default class FruitCrush implements IBaseGame{
    private _title: string;
    private _height: number;
    private _width: number;
    private _backgroundColor: string;

    private _scene: ReadonlyArray<Phaser.Scene>;

    constructor() {
        this._title = 'FruitCrush';
        this._backgroundColor = '#de3412';

        this._height = 700;
        this._width = 520;

        this._scene = [new BootScene(), new GameScene()]
    }
    destroy(){}

    getConfig(){
        let config : {} = {
            title : this._title,
            width : this._width,
            height : this._height,

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
};
