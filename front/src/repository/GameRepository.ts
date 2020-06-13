import axios, {AxiosResponse} from 'axios';

import {DEV_GAME_CONFIG_PATH} from "../config";
import {METHOD, METHOD_TYPE} from "@type";
import {IMainRs} from "./ArticleRepository";

class GameRepository{
    private readonly _path : string;
    private readonly _method : METHOD_TYPE;

    constructor() {
        this._path = DEV_GAME_CONFIG_PATH ;
        this._method = METHOD.GET;
    }

    async loadGame(gameTitle : string) : Promise<AxiosResponse<IMainRs>>{
        return axios({
            method: this._method,
            url : `${this._path}/${gameTitle}.json`
        });
    }
}

export default new GameRepository()
