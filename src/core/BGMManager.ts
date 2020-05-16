/*
*   name : BGMManager
*   description:
*       role :
*           - 게임에 맞는 BGM 깔아주기
*       method :
*           - init
*           - play
*           - stop
*           - resume
*/

import {GAME_TYPE} from "@type";

class BGMManager{
    private _bgm : null;

    constructor() {
        this._bgm = null;
    }

    destroy(){

    }

    init(game : GAME_TYPE){

    }

    stop(){

    }

    play(){

    }

    resume(){

    }

}
export default new BGMManager();
