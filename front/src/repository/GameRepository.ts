import axios, {AxiosResponse} from 'axios';

import {DEV_GAME_CONFIG_PATH} from "../config";
import {IArticle, METHOD, METHOD_TYPE} from "@type";

class GameRepository{
    private readonly _path : string;
    private readonly _method : METHOD_TYPE;

    constructor() {
        this._path = DEV_GAME_CONFIG_PATH ;
        this._method = METHOD.GET;
    }

    async loadGame(gameTitle : string) : Promise<AxiosResponse<IArticle>>{
        return axios({
            method: this._method,
            url : `${this._path}/${gameTitle}.json`
        });
    }
}

export default new GameRepository()
