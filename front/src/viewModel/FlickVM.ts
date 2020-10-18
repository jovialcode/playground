import ArticleModel from "../model/ArticleModel";
import ArticleVO from "../valueObject/ArticleVO";

export default class FlickVM{
    private static _instance : FlickVM;
    private _articleModel : ArticleModel | null;

    constructor() {
        this._articleModel = new ArticleModel();
    }

    public static getInstance() : FlickVM{
        if(FlickVM._instance === undefined){
            FlickVM._instance = new FlickVM();
        }
        return FlickVM._instance;
    }

    public searchArticles(searchValue : string){
        this._articleModel?.loadArticleList(searchValue);
    }

    public getArticle(sn : number) : ArticleVO | undefined | null{
        return this._articleModel?.getArticle(sn);
    }

    public get getArticleList() : ArticleVO[] | null | undefined{
        return this._articleModel?.articleList;
    }
}