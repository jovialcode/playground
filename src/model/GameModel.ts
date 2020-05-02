import {action, observable} from "mobx";

import GameRepository from "../repository/GameRepository";

export default class GameModel{

    constructor() {
    }

    @action
    load(){
        (async () => {
            try{
                const rs = await GameRepository.loadGame('tutorial')
                const data = rs.data;

            }catch (e) {
                //TODO 개인적으로 여기에 Logger 써서 log 파일 만들고 싶음.
                console.log(e);
            }
        })();
    }

}