/*
*   name : ScoreManager
*   description:
*       role :
*           - score 저장
*           - score 불러오기
*           - score 매기기
*/

import {observable} from "mobx";

class ScoreManager{
    @observable private _score : number;

    constructor() {
        this._score = 0;
    }

    destroy(){

    }

    init(){
        this._score = 0;
    }


    get score(): number {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
    }
}
export default new ScoreManager();
