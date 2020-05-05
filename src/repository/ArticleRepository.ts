import axios, {AxiosResponse} from 'axios';

import {DEV_ARTICLE_PATH} from "../config";
import {METHOD_TYPE} from "../type";

export interface IMainRs {
    title : string;
    subTitle : string;
    keyword : string[];
    createDate : string;
    content : string;
}


class ArticleRepository{
    private readonly _path : string;
    private readonly _method : METHOD_TYPE;

    constructor() {
        this._path = DEV_ARTICLE_PATH ;
        this._method = 'GET';
    }

    async loadMain() : Promise<AxiosResponse<IMainRs>>{
        return axios({
            method: this._method,
            url : `${this._path}/main.json`
        });
    }
}

export default new ArticleRepository()