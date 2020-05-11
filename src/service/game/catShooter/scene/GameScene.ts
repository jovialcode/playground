import Leon from "../object/Leon";
import Bullets from "../object/Bullets";

export default class GameScene extends Phaser.Scene {
    private _leon : Leon | null = null;
    private _bullets : Bullets;
    private _enemy;
    private _enemyBullets : Bullets;
    private _keyInput;

    constructor() {
        super({
            key: "GameScene"
        });
    }

    init(): void {
        const centerX = this.cameras.main.width / 2;
        const bottom = this.cameras.main.height - 90;

        //배경 화면 설정
        this.cameras.main.setBackgroundColor('black');

        //비행기(레옹) 객체 설정
        this._leon = new Leon({
            scene: this,
            x: centerX,
            y: bottom,
            key: 'leon'
        });

        //생선을 향해서 탄 발사!
        this._bullets = new Bullets(this);

        //적들도 총은 쏴야지?
        this._enemyBullets = new Bullets(this);

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
}
