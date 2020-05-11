import Fish from "./Fish";

export default class Enemys extends Phaser.Physics.Arcade.Group {

  constructor(scene) {
    super(scene.physics.world, scene);

    this.createMultiple({
      classType: Fish,
      frameQuantity: 30,
      active: false,
      visible: false,
      key: 'enemy'
    })
  }

  fireBullet(x : number, y : number) {
    const bullet = this.getFirstDead(false);
    if (bullet) {
      bullet.fire(x, y);
    }
  }
}
