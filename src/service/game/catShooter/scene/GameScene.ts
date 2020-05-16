import Leon from "../object/Leon";
import Enemy from "../object/Enemy";
import {ENEMY_LIST} from "../object/type";

export default class GameScene extends Phaser.Scene {
    private _leon : Leon;
    private _enemies: Phaser.GameObjects.Group;
    private _keyInput;

    constructor() {
        super({
            key: "GameScene"
        });
    }

    init(): void {
        this._enemies = this.add.group({ runChildUpdate: true });
    }

    create() : void{
        const centerX = this.cameras.main.width / 2;
        const bottom = this.cameras.main.height - 90;

        //비행기(레옹) 객체 설정
        this._leon = new Leon({
            scene: this,
            x: centerX,
            y: bottom,
            key: 'leon'
        });

        //적 생성
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 10; x++) {
                this._enemies.add(new Enemy(this, x*-35 + centerX+100, bottom-40*y-350, y%2 === 0 ? ENEMY_LIST.CAN : ENEMY_LIST.FISH));
            }
        }
    }

    update(): void {
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
