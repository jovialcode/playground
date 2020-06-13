import {Color} from "@lib";

export default class GameScene extends Phaser.Scene {

    constructor() {
        super({key: "GameScene"})
    }

    init() {
        this.cameras.main.setBackgroundColor(Color.BLACK);
    }

}
