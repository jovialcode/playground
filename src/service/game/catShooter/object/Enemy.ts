export default class Enemy extends Phaser.GameObjects.Sprite {
  constructor(scene : Phaser.Scene, x :number, y :number) {
    super(scene, x, y, 'bee');

    this.setOrigin(0, 0);
    this.setDisplaySize(30,30);
    this.setInteractive();
    this.initPhysics();

    this.scene.add.existing(this);
  }

  initPhysics(): void {
    this.scene.physics.world.enable(this);
  }

  update(): void {
    if (this.active) {
      this.anims.play("Dead");
      this.destroy();
    }
  }

  gotHurt(): void {
    this.setActive(false);
  }
}