import {action, observable} from "mobx";

import {getFirstDayOfMonth, getLastDayOfMonth} from "../../../util";

export default class CalendarModel{
    @observable private _day : Date;
    @observable private _firstDay : Date;
    @observable private _lastDay : Date;

    constructor(d : Date) {
        this._day = d;

        this._firstDay = getFirstDayOfMonth(d);
        this._lastDay = getLastDayOfMonth(d);
    }

    get day(): Date {
        return this._day;
    }

    get firstDay(): Date {
        return this._firstDay;
    }

    get lastDay(): Date {
        return this._lastDay;
    }

    set day(value: Date) {
        this._day = value;
    }

    set firstDay(value: Date) {
        this._firstDay = value;
    }

    set lastDay(value: Date) {
        this._lastDay = value;
    }
}