import axios, {AxiosResponse} from 'axios';

import {DEV_ARTICLE_PATH} from "../config";
import {IArticle, METHOD, METHOD_TYPE} from "@type";
import ArticleVO from "../valueObject/ArticleVO";

export interface IArticleListRs {
    articleList : ArticleVO[]
}

class ArticleRepository{
    private readonly _path : string;
    private readonly _method : METHOD_TYPE;

    constructor() {
        this._path = DEV_ARTICLE_PATH ;
        this._method = METHOD.GET;
    }

    async loadMain() : Promise<AxiosResponse<ArticleVO>>{
        return axios({
            method: this._method,
            url : `${this._path}/main.json`
        });
    }

    async loadArticleList() : Promise<AxiosResponse<IArticleListRs>>{
        return axios({
            method : METHOD.GET,
            url : `${this._path}/articleList.json`
        });
    }

    async loadArticle(articleSn : number) : Promise<AxiosResponse<ArticleVO>>{
        return axios({
            method : METHOD.GET,
            url : `${this._path}/article.json`
        });
    }


}

export default new ArticleRepository()
