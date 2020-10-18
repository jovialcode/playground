import {action, observable} from "mobx";
import {LOAD_TYPE} from "@type";
import ArticleRepository from "../repository/ArticleRepository";
import ArticleVO from "../valueObject/ArticleVO";

export default class ArticleModel{
    @observable private _isLoading : LOAD_TYPE;
    @observable private _articleList : ArticleVO[] | null;

    constructor() {
        this._articleList = null;
        this._isLoading = 'NONE';
        this.loadArticleList();
    }

    @action
    public loadArticleList(searchValue? : string){
        this._isLoading = 'LOADING';

        (async () => {
            try{
                const rs = await ArticleRepository.loadArticleList(searchValue);
                const data = rs.data;

                this._articleList = data.articleList;
                this._isLoading = 'DONE';
            }catch (e) {
                console.log(e);
            }
        })();
    }

    public getArticle(sn : number) : ArticleVO | undefined| null{
        if(this._articleList === null) return null;
        return this._articleList.find(vo => vo.sn === sn);
    }

    get articleList(): ArticleVO[] | null {
        return this._articleList;
    }
};