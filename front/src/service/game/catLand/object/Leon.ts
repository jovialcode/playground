export interface LeonConfig {
    height : number;
    width : number;
    speed : number;
    jump : number;
}

export interface LeonFlag {
    onJump : boolean;
    onFloor : boolean;
}

export default class Leon extends Phaser.GameObjects.Sprite {
    private _config : LeonConfig;
    private _flag : LeonFlag;
    private _cursors: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor(params : any) {
        super(params.scene, params.x, params.y, params.key, params.frame);

        this.initVariables();
        this.initImage();
        this.initInput();
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
            onJump : false,
            onFloor : false,
        }
    }

    private initInput(): void {
        this._cursors = this.scene.input.keyboard.createCursorKeys();
    }

    private initImage(): void{
        this.setOrigin(0, 0);
        this.setScale(1,1);
        this.setInteractive();
    }

    private initPhysics(): void {
        this.scene.physics.world.enable(this);
        //this.body.setCollideWorldBounds(true);

        this.body.setGravityY(100);
        this.body.setBounce(0.2);
        this.body.setSize(6, 12);
        this.body.setOffset(6, 4);
        this.body.maxVelocity.x = 800;
        this.body.maxVelocity.y = 500;
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
        //상좌우이동
        if (this._cursors.right.isDown) {
            this.body.setVelocityX(+400);
            this._flag.onFloor = true;
            this._flag.onJump = false;
            this.flipX = false;
        } else if(this._cursors.left.isDown) {
            this.body.setVelocityX(-400);
            this._flag.onFloor = true;
            this._flag.onJump = false;
            this.flipX = true;
        } else {
            this.body.setVelocityX(0);
            this._flag.onFloor = false;
            this._flag.onJump = false;
        }

        if(this._cursors.space.isDown && !this._flag.onJump){
            this._flag.onJump = true;
            this.body.setVelocityY(-300);
        }
    }

    /////////////////////////////////////////////////////////////
}
