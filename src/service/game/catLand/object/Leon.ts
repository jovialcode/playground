export interface LeonConfig {
    height : number;
    width : number;
    speed : number;
    jump : number;
}

export interface LeonFlag {
    onJump : boolean;
}

export default class Leon extends Phaser.GameObjects.Sprite {
    private _config : LeonConfig;
    private _flag : LeonFlag;
    private _cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    private _jumpKey : Phaser.Input.Keyboard.Key;

    constructor(params : any) {
        super(params.scene, params.x, params.y, params.key, params.frame);

        this.initVariables();
        this.initInput();
        this.initImage();
        this.initPhysics();
        this.initSetting();
        this.scene.add.existing(this);
    }

    /////////////////////////////////////////////////////////////

    private initVariables(){
        this._config = {
            width : 40,
            height : 60,
            speed : 10,
            jump : 20
        };

        this._flag = {
            onJump : false
        }
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
        this._jumpKey = this.scene.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );
    }

    private initSetting() : void{
        this.setSize(this._config.width, this._config.height);
        this.setDisplaySize(this._config.width, this._config.height);
    }

    /////////////////////////////////////////////////////////////

    update(): void {
        // 레옹 움직임 업데이트
        this.updatePosition();
    }

    private updatePosition(): void {
        //좌우 이동
        if (this._cursors.right.isDown) {
            this.setX(this.x + this._config.speed);
        } else if (this._cursors.left.isDown) {
            this.setX(this.x - this._config.speed);
        }
        
        //점프
        if(this._jumpKey.isDown){
            this.setY(this.y + this._config.jump);
        }
    }

    /////////////////////////////////////////////////////////////
}
