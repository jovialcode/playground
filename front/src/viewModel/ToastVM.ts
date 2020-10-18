import {action, observable} from "mobx";

export default class ToastVM{
    private static _instance : ToastVM;
    @observable private _toastMsg : string | null;

    constructor() {
        this._toastMsg = null;
    }

    public static getInstance() : ToastVM{
        if(ToastVM._instance === undefined){
            ToastVM._instance = new ToastVM();
        }
        return ToastVM._instance;
    }


    get toastMsg(): string | null {
        return this._toastMsg;
    }

    @action
    public setToastMsg(value: string | null) {
        this._toastMsg = value;

        setTimeout(() =>{
            this._toastMsg = null;
        }, 1000)
    }
}