import Bullet from "./Bullet";
import {SPEED_ENUM} from "./type";
import ScoreManager from "@core/ScoreManager";

export default class Leon extends Phaser.GameObjects.Image {
    private _bullets: Phaser.GameObjects.Group;
    private _cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    private _shootingKey: Phaser.Input.Keyboard.Key;
    private _movingKey: Phaser.Input.Keyboard.Key;
    private _flyingSpeed: number;
    private _lives : number;
    public getBullets(): Phaser.GameObjects.Group {
        return this._bullets;
    }

    constructor(params : any) {
        super(params.scene, params.x, params.y, params.key, params.frame);

        this.initVariables();
        this.initInput();
        this.initImage();
        this.initPhysics();

        this.scene.add.existing(this);
    }

    private initVariables(){
        this._lives = 1;
        this._bullets = this.scene.add.group({
            maxSize: 30,
            runChildUpdate: true
        });

        this._flyingSpeed = SPEED_ENUM.level1;
    }

    private initInput(): void {
        this._cursors = this.scene.input.keyboard.createCursorKeys();
        this._shootingKey = this.scene.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );
        // this._movingKey = this.scene.input.keyboard.addKeys({
        //         Phaser.Input.Keyboard.KeyCodes.LEFT,
        //         Phaser.Input.Keyboard.KeyCodes.RIGHT,
        // );
    }

    private initImage(): void{
        this.setOrigin(0, 0);
        this.setInteractive();
    }

    private initPhysics(): void {
        this.scene.physics.world.enable(this);
    }

    update(): void {
        this.handleFlying();
        this.handleShooting();
    }

    private handleFlying(): void {
        if (this._cursors.right.isDown) {
            this.setX(this.x + this._flyingSpeed);
        } else if (this._cursors.left.isDown) {
            this.setX(this.x + -this._flyingSpeed);
        }
    }

    private handleShooting(): void {
        if (this._shootingKey.isDown) {
            this._bullets.add(
                new Bullet({
                    scene: this.scene,
                    x: this.x,
                    y: this.y - this.height,
                    key: "bullet",
                    bulletProperties: {
                        speed: 10
                    }
                })
            );
        }
    }

    public gotHurt(): void {
        //점수 올리기
        if(this._lives > 0) this._lives -= 1;
        else{
            var particle = this.scene.add.particles('flash1');
            var emitter = particle.createEmitter({
                x: this.x,
                y: this.y,
                speed: { min: -800, max: 800 },
                angle: { min: 0, max: 360 },
                scale: { start: 0.5, end: 0 },
                quantity:1,
                blendMode: 'SCREEN',
                //active: false,
                lifespan: 20,
                gravityY: 60
            });

            this.scene.time.delayedCall(150, function() {
                particle.destroy();
            });
            this.scene.sound.play('explosion', {
                volume: 0.3
            });
            this.setActive(false);
            this.destroy();
        }
    }

    get lives(): number {
        return this._lives;
    }
}
