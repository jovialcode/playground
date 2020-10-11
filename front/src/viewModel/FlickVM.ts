import ArticleModel from "../model/ArticleModel";
import ArticleVO from "../valueObject/ArticleVO";

export default class FlickVM{
    private _articleModel : ArticleModel | null;

    constructor() {
        this._articleModel = new ArticleModel();
    }

    get getArticleList() : ArticleVO[] | null | undefined{
        return this._articleModel?.articleList;
    }

    searchArticles(searchValue : string){
        this._articleModel?.loadArticleList(searchValue);
    }
}