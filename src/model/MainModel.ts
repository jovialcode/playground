import {action, observable} from "mobx";

import MainVO from "../valueObject/MainVO";
import ArticleRepository from "../repository/ArticleRepository";

export default class MainModel{
    @observable private _mainArticle : MainVO | null;

    constructor() {
        /*초기화*/
        this._mainArticle = null;

        /*데이터 로드*/
        this.init()
    }

    @action
    init(){
        (async () => {
            try{
                const rs = await ArticleRepository.loadMain()
                const data = rs.data;
                this._mainArticle =
                    new MainVO(
                        data.title,
                        data.subTitle,
                        data.keyword,
                        data.createDate,
                        data.content
                    );
            }catch (e) {
                //TODO 개인적으로 여기에 Logger 써서 log 파일 만들고 싶음.
                console.log(e);
            }
        })();
    }

    get mainArticle(): MainVO | null {
        return this._mainArticle;
    }
}