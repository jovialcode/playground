export default class Leon extends Phaser.GameObjects.Sprite {
    private _bullets: Phaser.GameObjects.Group;
    private _cursors: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor(params : any) {
        super(params.scene, params.x, params.y, params.key, params.frame);

        this.initVariables();
        this.initInput();
        this.initImage();
        this.initPhysics();

        this.scene.add.existing(this);
    }

    private initVariables(){

    }

    private initInput(): void {
        this._cursors = this.scene.input.keyboard.createCursorKeys();
    }

    private initImage(): void{
        this.setOrigin(0, 0);
        this.setInteractive();
    }

    private initPhysics(): void {
        this.scene.physics.world.enable(this);
    }

    update(): void {

    }
}