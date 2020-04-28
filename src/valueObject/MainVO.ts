export default class MainVO{
    private readonly _title : string;
    private readonly _subTitle : string;
    private readonly _keyword : string[];
    private readonly _createDate : string;

    private readonly _content : string;

    constructor(title: string, subTitle: string, keyword: string[], createDate: string, content: string) {
        this._title = title;
        this._subTitle = subTitle;
        this._keyword = keyword;
        this._createDate = createDate;
        this._content = content;
    }

    get title(): string {
        return this._title;
    }

    get subTitle(): string {
        return this._subTitle;
    }

    get keyword(): string[] {
        return this._keyword;
    }

    get createDate(): string {
        return this._createDate;
    }

    get content(): string {
        return this._content;
    }
}