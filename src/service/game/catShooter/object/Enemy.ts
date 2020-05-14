import {
  ENEMY_LIST,
  ENEMY_TYPE,
  IMAGE_CONFIG
} from "./type";

export default class Enemy extends Phaser.GameObjects.Sprite {
  private readonly _type : ENEMY_TYPE;
  private _bullets: Phaser.GameObjects.Group;
  private _moveTween: Phaser.Tweens.Tween;
  private _image : IMAGE_CONFIG;
  private _dyingTime : number;
  private _lives : number;
  private _bonus : number;


  constructor(scene : Phaser.Scene, x :number, y :number, type : ENEMY_TYPE) {
    super(scene, x, y, type);

    this._type = type; //적 타입 설정

    //변수 설정
    this.initVariables();
    this.initImage();
    this.setInteractive();
    this.initPhysics();

    this.initTweens();

    this.scene.add.existing(this);
  }

  private initVariables() : void{
    this._bullets = this.scene.add.group({
      maxSize: 10,
      runChildUpdate: true
    });

    switch (this._type) {
      case ENEMY_LIST.CAN:
        this._dyingTime = 100;
        this._lives = 1;
        this._bonus = 20;
        this._image = {
          width : 32,
          height : 32
        };

        break;

      case ENEMY_LIST.FISH:
        this._dyingTime = 120;
        this._lives = 2;
        this._bonus = 40;
        this._image = {
          width : 32,
          height : 32
        };
        break;
    }
  }

  private initImage(): void {
    this.setOrigin(0, 0);
    this.setDisplaySize(this._image.width,this._image.height);
    this.setActive(true);
  }

  private initPhysics(): void {
    this.scene.physics.world.enable(this);
  }

  private initTweens(): void {
    this._moveTween = this.scene.tweens.add({
      targets: this,
      x: this.x + 50,
      ease: "Power0",
      duration: 6000,
      yoyo: true,
      repeat: -1
    });
  }
}