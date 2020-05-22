/*
*   name : BGMManager
*   description:
*       role :
*           - 게임에 맞는 BGM 깔아주기
*       method :
*           - init
*           - play
*           - stop : 이건 음소거 기능 만들 때 사용
*           - resume : 이건 음소거 기능 만들 때 사용
*/

import {observable} from "mobx";
import {BGM_LIST, BGM_STATE_TYPE, BGM_TYPE, GAME_LIST, GAME_TYPE} from "@type";
import {DEV_GAME_CONFIG_PATH} from "../config";

class BGMManager{
    private _bgm : HTMLAudioElement | null;
    private _bgmList : BGM_TYPE[];
    private _bgmVolume : number = 0;
    @observable private _bgmState : BGM_STATE_TYPE;

    constructor() {
        this._bgm = null;
        this._bgmState = BGM_STATE_TYPE.NONE;
        this._bgmList = [
            {
                title : BGM_LIST.CAT_SHOOTER,
                gameName : GAME_LIST.CAT_SHOOTER,
                src : `${DEV_GAME_CONFIG_PATH}/catShooter/audio/spaceBackgroundAudio.mp3`
            }
        ]
    }

    destroy(){

    }

    init(game : GAME_TYPE){
        if(this._bgm) this._bgm.remove();
        const bgm = this._bgmList.find((b)=>{
            return b.gameName === game.title;
        });

        if(bgm) this.load(bgm);
    }

    private load(bgm : BGM_TYPE){
        const $body = document.querySelector('body');
        this._bgm = document.createElement("audio");
        this._bgm.src = bgm.src;
        this._bgm.loop = true;
        this._bgm.id = 'bgm';
        this._bgm.autoplay = true;
        this._bgm.volume = this._bgmVolume =  0.3; //TODO 이거 줄이는 method랑 view 만들기
        this._bgmState = BGM_STATE_TYPE.PLAY;
        $body?.appendChild(this._bgm);
    }

    stop(){

    }

    mute(){
        if(this._bgm){
            this._bgm.muted = true;
            this._bgmState = BGM_STATE_TYPE.MUTE;
        }
    }

    play(){

    }

    resume(){
        if(this._bgm){
            this._bgm.muted = false;
            this._bgmState = BGM_STATE_TYPE.PLAY;
        }
    }

    get bgmState(): BGM_STATE_TYPE {
        return this._bgmState;
    }

    get bgmVolume() : number{
        return this._bgmVolume;
    }
}
export default new BGMManager();
