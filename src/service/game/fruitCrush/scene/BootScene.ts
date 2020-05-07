export default class BootScene extends Phaser.Scene {
    private _loadingBar: Phaser.GameObjects.Graphics | null = null;
    private _progressBar: Phaser.GameObjects.Graphics | null = null;

    constructor() {
        super('BootScene');
    }

    preload(): void {
        this.cameras.main.setBackgroundColor(0);
        this.createLoadingbar();

        this.load.on(
            "progress",
            (value : any) => {
                this._progressBar?.clear();
                this._progressBar?.fillStyle(16711680, 1);
                this._progressBar?.fillRect(
                    this.cameras.main.width / 4,
                    this.cameras.main.height / 2 - 16,
                    (this.cameras.main.width / 2) * value,
                    16
                );
            },
            this
        );

        this.load.on(
            "complete",
            () => {
                this._progressBar?.destroy();
                this._loadingBar?.destroy();
            },
            this
        );

        //여기서 리소스 로딩함.
        this.load.pack("preload", "/data/game/fruitCrush/resource.json", "preload");
    }

    update(): void {
        this.scene.start("GameScene");
    }

    private createLoadingbar(): void {
        this._loadingBar = this.add.graphics();
        this._loadingBar.fillStyle(0, 1);
        this._loadingBar.fillRect(
            this.cameras.main.width / 4 - 2,
            this.cameras.main.height / 2 - 18,
            this.cameras.main.width / 2 + 4,
            20
        );
        this._progressBar = this.add.graphics();
    }
}
