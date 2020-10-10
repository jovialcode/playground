export interface IArticle {
    sn : number;
    title : string;
    subTitle : string;
    keyword : string[];
    createDate : string;
    content : string;
}

export interface IArticleList {
    articleList : IArticle
}