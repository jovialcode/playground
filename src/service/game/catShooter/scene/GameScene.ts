import Leon from "../object/Leon";
import Bullets from "../object/Bullets";
import Enemy from "../object/Enemy";
import {ENEMY_LIST} from "../object/type";

export default class GameScene extends Phaser.Scene {
    private _leon : Leon;
    private _enemies: Phaser.GameObjects.Group;
    private _bullets : Bullets;
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

        //생선을 향해서 탄 발사!
        this._bullets = new Bullets(this);

        //적 생성
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 10; x++) {
                this._enemies.add(new Enemy(this, x*-35 + centerX+100, bottom-40*y-350, y%2 === 0 ? ENEMY_LIST.CAN : ENEMY_LIST.FISH));
            }
        }

        // 이벤트 설정
        this.addEvents();
    }

    addEvents() {
        //입력 받는 KeyBoard 설정
        this._keyInput = [
            this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
            this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER),
        ];

        //마우스 이벤트
        this.input.on('pointermove', (pointer) => {
            this._leon.x = pointer.x;
        });

        //마우스 이벤트
        this.input.on('pointerdown', (pointer) => {
            this.shootBullet();
        });
    }


    update() : void{
        this._keyInput.forEach(key => {
            if (Phaser.Input.Keyboard.JustDown(key)) {
                this.shootBullet();
            }
        });
    }

    shootBullet() :void {
        this._bullets.fireBullet(this._leon.x, this._leon.y - 20);
    }

    // private bulletHitEnemy(bullet, enemy): void {
    //     bullet.destroy();
    //     enemy.gotHurt();
    // }
}
