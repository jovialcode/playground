export default class Leon extends Phaser.GameObjects.Image {

    constructor(params : any) {
        super(params.scene, params.x, params.y, params.key, params.frame);
        // set image settings
        this.setOrigin(0, 0);
        this.setInteractive();

        this.scene.add.existing(this);
    }
}
