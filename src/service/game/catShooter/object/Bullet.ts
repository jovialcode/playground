export default class Bullet extends Phaser.GameObjects.Image {
  private _bulletSpeed: number;
  private _remainTime : number;
  private _way: string;

  constructor(params) {
    super(params.scene, params.x, params.y, params.key);

    this.initVariables(params);
    this.initImage();
    this.initPhysics();

    this.scene.add.existing(this);
  }

  private initVariables(params): void {
    this._remainTime = this.y;
    this._way = params.way;
    this._bulletSpeed = params.bulletProperties.speed;
  }

  private initImage(): void {
    this.setOrigin(0.5, 0.5);
  }

  private initPhysics(): void {
    this.scene.physics.world.enable(this);
    this.setSize(1, 8);
  }

  update(): void {
    if (this.y < 0 || this.y > this.scene.sys.canvas.height) {
      this.destroy();
    }else{
      let updateValue = this._way === 'up'? this.y - this._bulletSpeed : this.y + this._bulletSpeed
      this.setY(updateValue);
    }
  }
}