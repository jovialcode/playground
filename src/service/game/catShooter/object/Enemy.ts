import {
  ENEMY_LIST,
  ENEMY_TYPE,
  IMAGE_CONFIG
} from "./type";
import ScoreManager from "@core/ScoreManager";

export default class Enemy extends Phaser.GameObjects.Sprite {
  private readonly _type : ENEMY_TYPE;
  private _bullets: Phaser.GameObjects.Group;
  private _moveTween: Phaser.Tweens.Tween;
  private _image : IMAGE_CONFIG;
  private _dyingTime : number;
  private _speed : number;
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
      maxSize: 30,
      runChildUpdate: true
    });

    switch (this._type) {
      case ENEMY_LIST.FOOD:
        this._dyingTime = 100;
        this._speed = 10;
        this._lives = 1;
        this._bonus = 20;
        this._image = {
          width : 32,
          height : 32
        };
        this._moveTween = this.scene.tweens.add({
          targets: this,
          x: this.x + 50 + this._speed,
          ease: "Power0",
          duration: 6000,
          yoyo: true,
          repeat: -1
        });
        break;

      case ENEMY_LIST.CUTEFOOD:
        this._dyingTime = 120;
        this._speed = 20;
        this._lives = 2;
        this._bonus = 40;
        this._image = {
          width : 32,
          height : 32
        };
        this._moveTween = this.scene.tweens.add({
          targets: this,
          x: this.x + 50 + this._speed,
          ease: "Sine.easeInOut",
          duration: 6000,
          yoyo: true,
          repeat: -1
        });
        break;

      case ENEMY_LIST.CAN:
        this._dyingTime = 140;
        this._speed = 30;
        this._lives = 3;
        this._bonus = 80;
        this._image = {
          width : 32,
          height : 32
        };
        this._moveTween = this.scene.tweens.add({
          targets: this,
          props:{
            x: {value: this.x + 50 + this._speed, duration: 2000, flipX: true},
            y: {value: this.y + 50 + this._speed, duration: 6000},
          },
          ease: "Power0",
          yoyo: true,
          repeat: -1
        });
        break;

      case ENEMY_LIST.FISH:
        this._dyingTime = 160;
        this._speed = 45;
        this._lives = 4;
        this._bonus = 100;
        this._image = {
          width : 32,
          height : 32
        };
        this._moveTween = this.scene.tweens.add({
          targets: this,
          x: {value: this.x + 50 + this._speed, duration: 2000, flipX: true},
          y: {value: this.y + 50 + this._speed, duration: 6000},
          ease: "Power0",
          yoyo: true,
          repeat: -1
        });
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

  }

  public gotHurt(): void {
    //점수 올리기
    if(this._lives > 0) this._lives -= 1;
    else{
      ScoreManager.score += this._bonus;
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
}