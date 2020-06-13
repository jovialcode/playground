import BGMManager from "@core/BGMManager";
import {BGM_LIST, GAME_LIST} from "@type";
import {DEV_GAME_CONFIG_PATH} from "../../../../config";

export default class GameOverScene extends Phaser.Scene {
    private _textManager : Phaser.GameObjects.Text;

    constructor() {
        super('GameOverScene');
    }

    init(): void {
        BGMManager.load({
            title : BGM_LIST.GAME_OVER,
            gameName : GAME_LIST.CAT_SHOOTER,
            src : `${DEV_GAME_CONFIG_PATH}/catShooter/audio/gameover.wav`,
            repeat : false
        });
    }

    create(): void {
        this._textManager = this.add.text(350, 350, `GAME OVER`, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
    }
}
