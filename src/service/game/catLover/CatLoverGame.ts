import {IBaseGame} from "../../../type";

export default class CatLoverGame implements IBaseGame{
    private _title: string;
    private _height: number;
    private _width: number;
    private _backgroundColor: string;

    private _scene: [any];

    constructor() {
        this._title = 'FruitCrush';
        this._backgroundColor = '#de3412';

        this._height = 700;
        this._width = 520;

        this._scene = []
    }
    destroy(){}

    getConfig(){
        let config : {} = {
            _title : this._title,
            _width : this._width,
            _height : this._height,

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
