import {IBaseGame} from "@type/Game";
import {ConfigType} from "./config/ConfigType";
import BootScene from "./scene/BootScene";
import GameScene from "./scene/GameScene";

export default class MothersTheorem implements IBaseGame {

    private readonly _width: number;
    private readonly _height: number;
    private readonly _title: string;

    private _scene: ReadonlyArray<Phaser.Scene>;

    constructor() {
        this._title = "삼단 정리"
        this._width = 300;
        this._height = 200;

        this._scene = [new BootScene(), new GameScene()];
    }


    getConfig(): ConfigType {
        return {
            title: this._title,
            width: this._width,
            height: this._height
        };
    }

    getHeight(): number {
        return this._height;
    }

    getWidth(): number {
        return this._width;
    }

}
