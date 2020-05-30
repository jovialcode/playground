import Leon from "../object/Leon";
import Enemy from "../object/Enemy";
import {ENEMY_LIST} from "../object/type";

export default class GameScene extends Phaser.Scene {
    private _leon : Leon;
    private _background : Phaser.GameObjects.TileSprite;
    private _enemies: Phaser.GameObjects.Group;
    private _shooterEnemy : Phaser.GameObjects.Group;
    private _level : number;
    private _centerX : number;
    private _bottom: number;

    constructor() {
        super({
            key: "GameScene"
        });
    }

    init(): void {
        this._enemies = this.add.group({ runChildUpdate: true });
        this._shooterEnemy = this.add.group({ runChildUpdate: true });
        this._level = 0;
        this._centerX = this.cameras.main.width / 2;
        this._bottom = this.cameras.main.height - 90;

        this._background = this.add.tileSprite(this._centerX, this._bottom - 260,792,700,'background');
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

        //랜덤 적 생성
        this.time.addEvent({
            delay: 11500,
            callback: ()=>{this.createShooterEnemy(this._shooterEnemy.getChildren().length %2=== 0)},
            callbackScope: this,
            loop: true
        });
    }

    createEnemy(){
        this._level += 1;
        let enemyType;
        switch (this._level) {
            case 4 : enemyType = ENEMY_LIST.FISH; break;
            case 3 : enemyType = ENEMY_LIST.CAN; break;
            case 2 : enemyType = ENEMY_LIST.CUTEFOOD; break;
            case 1 :
            default : enemyType = ENEMY_LIST.FOOD;
        }
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 10; x++) {
                this._enemies.add(new Enemy(this, x*-35 + this._centerX + 100, this._bottom-40*y-350, enemyType));
            }
        }
    }

    createShooterEnemy(way : boolean){
        if(this._shooterEnemy.getChildren().length > 4) return;

        let side = {
            x : way?  0 : 750,
        };

        this._shooterEnemy.add(
            new Enemy(this,
                side.x,
                0,
                ENEMY_LIST.MOUSE));
    }

    update(): void {
        this._background.tilePositionY += 2;

        if (this._leon.active) {
            this._leon.update();
            this.checkCollisions();
        }

        if(this._enemies.getChildren().length == 0){
            this.createEnemy();
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

        this.physics.overlap(
            this._leon.getBullets(),
            this._shooterEnemy,
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
