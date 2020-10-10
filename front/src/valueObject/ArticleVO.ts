import {IArticle} from "@type";

export default class ArticleVO implements IArticle{
    private _sn: number;
    private _content: string;
    private _createDate: string;
    private _keyword: string[];
    private _subTitle: string;
    private _title: string;

    constructor(article : IArticle) {
        this._sn = article.sn;
        this._title = article.title;
        this._content = article.content;
        this._createDate = article.createDate;
        this._keyword = article.keyword;
        this._subTitle = article.subTitle;
    }

    get sn(): number {
        return this._sn;
    }

    set sn(value: number) {
        this._sn = value;
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    get createDate(): string {
        return this._createDate;
    }

    set createDate(value: string) {
        this._createDate = value;
    }

    get keyword(): string[] {
        return this._keyword;
    }

    set keyword(value: string[]) {
        this._keyword = value;
    }

    get subTitle(): string {
        return this._subTitle;
    }

    set subTitle(value: string) {
        this._subTitle = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }
}