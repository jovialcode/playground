import {Color} from "@lib/color";

export default class BootScene extends Phaser.Scene {
    constructor() {
        super("BootScene");
    }

    preload() {
        this.cameras.main.setBackgroundColor(Color.WHITE);
    }

    update() {
        this.scene.start("GameScene");
    }

}
