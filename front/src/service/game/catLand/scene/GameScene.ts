import Leon from "../object/Leon";
import {logMethod} from "@util";

export default class GameScene extends Phaser.Scene {
    private _leon : Leon;
    private _background : Phaser.GameObjects.TileSprite;
    private _ground : Phaser.GameObjects.Sprite;
    private _camera : Phaser.Cameras.Scene2D.Camera;

    constructor() {
        super({
            key: "GameScene"
        });
    }

    /////////////////////////////////////////////////////////////

    @logMethod
    init(): void {
        //백그라운드 셋팅
        this.initBackground()
        //카메라 셋팅
        this.initCamera();
    }

    @logMethod
    private initBackground() : void{
        this._background = this.add.tileSprite(
            0, 0,
            this.game.config.width, this.game.config.height,
            'background'
        );
        this._background.setOrigin(0,0);
        this._background.setScrollFactor(0,0);

        this._ground = this.physics.add.sprite(0, 0,
            'background');
    }

    @logMethod
    private initCamera() : void{
        this._camera = this.cameras.main;
    }

    /////////////////////////////////////////////////////////////

    @logMethod
    create() : void{
        //플레이어 셋팅
        this.createPlayer()
        //물리력(중력) 셋팅
        this.createPhysics();
    }

    @logMethod
    private createPlayer() : void{
        this._leon = new Leon({
            scene: this,
            x: 0,
            y: 0,
            key: 'runningLeon',
            frame: 60
        });
        this._camera.startFollow(this._leon);
    }

    @logMethod
    private createPhysics() : void{
        this.physics.add.collider(this._background, this._leon);
    }

    /////////////////////////////////////////////////////////////

    update(): void {
        // 배경 이미지 업데이트
        this._background.tilePositionX = this._camera.scrollX * .3;

        //Player 객체 업데이트
        if (this._leon.active) {
            this._leon.update();
        }
    }
}
