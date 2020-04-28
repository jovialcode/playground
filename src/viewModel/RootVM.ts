import {observable} from "mobx";

import MainModel from "../model/MainModel";
import MainVO from "../valueObject/MainVO";
import {NAVI_TYPE} from "../type";

export default class RootVM {
	@observable private _currentOn : NAVI_TYPE;

	constructor() {
		this._currentOn = 'MAIN';
	}

	/*********Getter***********/
	get currentOn(): NAVI_TYPE{
		return this._currentOn;
	}
	
	/*********Setter***********/
	set currentOn(value: NAVI_TYPE) {
		this._currentOn = value;
	}
}