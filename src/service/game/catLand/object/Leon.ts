export default class Leon extends Phaser.GameObjects.Sprite {
    private _width : number;
    private _height : number;
    private _cursors: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor(params : any) {
        super(params.scene, params.x, params.y, params.key, params.frame);

        this.initVariables();
        this.initInput();
        this.initImage();
        this.initPhysics();

        this.initSetting();
        this.scene.add.existing(this);
    }

    private initVariables(){
        this._width = 40;
        this._height = 60;
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

    private initSetting() : void{
        this.setSize(this._width, this._height);
        this.setDisplaySize(this._width, this._height);
    }

    update(): void {

    }
}
