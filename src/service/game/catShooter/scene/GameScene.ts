import Leon from "../object/Leon";
import Enemy from "../object/Enemy";
import {ENEMY_LIST} from "../object/type";

export default class GameScene extends Phaser.Scene {
    private _leon : Leon;
    private _background : Phaser.GameObjects.TileSprite;
    private _enemies: Phaser.GameObjects.Group;
    private _level : number;
    private _centerX : number;
    private _bottom: number;
    private _music;

    constructor() {
        super({
            key: "GameScene"
        });
    }

    init(): void {
        this._enemies = this.add.group({ runChildUpdate: true });
        this._level = 1;
        this._centerX = this.cameras.main.width / 2;
        this._bottom = this.cameras.main.height - 90;

        this._background = this.add.tileSprite(this._centerX, this._bottom - 260,792,700,'background');
        this.sound.add('theme');
        this.sound.play('theme');


    }

    create() : void{
        //비행기(레옹) 객체 설정
        this._leon = new Leon({
            scene: this,
            x: this._centerX,
            y: this._bottom,
            key: 'leon'
        });

        //적 생성
        this.createEnemy();
    }

    createEnemy(){
        this._level += 1;
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 10; x++) {
                this._enemies.add(new Enemy(this, x*-35 + this._centerX+100, this._bottom-40*y-350, y%2 === 0 ? ENEMY_LIST.CAN : ENEMY_LIST.FISH));
            }
        }
    }

    update(): void {
        this._background.tilePositionY += 2;

        if (this._leon.active) {
            this._leon.update();
            this.checkCollisions();
        }
    }

    private checkCollisions(): void {
        this.physics.overlap(
            this._leon.getBullets(),
            this._enemies,
            this.bulletHitEnemy,
            null,
            this
        );
    }

    private bulletHitEnemy(bullet, enemy): void {
        bullet.destroy();
        enemy.gotHurt();
    }
}
