import Phaser from 'phaser'

export default class TutorialGame extends Phaser.Scene{
    private _config : any;

    constructor() {
        super('demo');
        this._config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            parent: 'game',
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 200 }
                }
            },
            scene: {
                preload: this.preload,
                create: this.create
            }
        }
    }
    
    create(){
        this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0);

        this.add.shader('Plasma', 0, 412, 800, 172).setOrigin(0);

        this.add.image(400, 300, 'libs');

        const logo = this.add.image(400, 70, 'logo');

        this.tweens.add({
            targets: logo,
            y: 350,
            duration: 1500,
            ease: 'Sine.inOut',
            yoyo: true,
            repeat: -1
        })

    };
    preload(){
        this.load.image('logo', 'assets/phaser3-logo.png');
        this.load.image('libs', 'assets/libs.png');
        this.load.glsl('bundle', 'assets/plasma-bundle.glsl.js');
        this.load.glsl('stars', 'assets/starfields.glsl.js');
    };



    get config(): any {
        return this._config;
    }
};
