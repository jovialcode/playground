
import Phaser from 'phaser'
import IBaseGame from "../BaseGame";
import {BootScene} from "../BootScene";

export default class FruitCrush implements IBaseGame{
    private title: string;
    private height: number;
    private width: number;
    private backgroundColor: string;

    private scene: [];

    constructor() {
        this.title = 'FruitCrush';
        this.backgroundColor = '#de3412'

        this.height = 700;
        this.width = 520;

        this.scene = [BootScene]
    }
    destroy(){}

    getConfig() : Phaser.Types.Core.GameConfig{
        let config : Phaser.Types.Core.GameConfig = {
            width : this.width,

        };

        return config;
    }
};
