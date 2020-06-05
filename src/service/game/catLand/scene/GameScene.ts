import Leon from "../object/Leon";
import {logMethod} from "@util";

export default class GameScene extends Phaser.Scene {
    private _leon : Leon;
    private _background : Phaser.GameObjects.TileSprite;

    constructor() {
        super({
            key: "GameScene"
        });
    }

    @logMethod
    init(): void {
        this._background = this.add.tileSprite(
            0, 0,
            600, 371,
            'background'
        );
    }

    @logMethod
    create() : void{
        this._leon = new Leon({
            scene: this,
            x: 0,
            y: 0,
            key: 'walkCat',
            frame: {frameWidth: 32, frameHeight: 48 }
        });
    }

    update(): void {

    }
}
