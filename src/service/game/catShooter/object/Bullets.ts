import Bullet from "./Bullet";

export default class Bullets extends Phaser.Physics.Arcade.Group {

  constructor(scene) {
    super(scene.physics.world, scene);

    this.createMultiple({
      classType: Bullet,
      frameQuantity: 30,
      active: false,
      visible: false,
      key: 'laser'
    })
  }

  fireBullet(x : number, y : number) {
    const bullet = this.getFirstDead(false);
    if (bullet) {
      bullet.fire(x, y);
    }
  }
}
