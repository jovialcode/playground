import axios, {AxiosResponse} from 'axios';

import {DEV_ARTICLE_PATH} from "../config";
import {
    IMainRs,
    METHOD_TYPE} from "../type";

class ArticleRepository{
    private readonly _path : string;
    private readonly _method : METHOD_TYPE;

    constructor() {
        this._path = DEV_ARTICLE_PATH ;
        this._method = 'get';
    }

    async loadMain() : Promise<AxiosResponse<IMainRs>>{
        return axios({
            method: this._method,
            url : `${this._path}/main.json`
        });
    }
}

export default new ArticleRepository()