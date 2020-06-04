import Leon from "../object/Leon";

export default class GameScene extends Phaser.Scene {
    private _leon : Leon;
    private _background : Phaser.GameObjects.TileSprite;

    constructor() {
        super({
            key: "GameScene"
        });
    }

    init(): void {
        this._background = this.add.tileSprite(0, 0, this.game.config.width,this.game.config.height,'background');
    }

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
