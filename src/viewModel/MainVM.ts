import {observable} from "mobx";

import MainModel from "../model/MainModel";
import MainVO from "../valueObject/MainVO";
import BGMManager from "@core/BGMManager";

export default class MainVM {
	@observable private _mainModel : MainModel;

	constructor() {
		this._mainModel = new MainModel()
	}

	get mainArticle() : MainVO | null{
		if(!this._mainModel) return null;
		return this._mainModel.mainArticle;
	}
}