import {action, computed, observable} from "mobx";

import CalendarModel from "./CalendarModel";
import {createCalendarDay} from "../../../util";
import {ICalendarDayOfWeek, ShortDayOfWeek} from "../../../type/Calendar";

export default class CalendarVM{
    @observable private _calendarModel : CalendarModel;
    private _calendarDayOfWeek : ICalendarDayOfWeek[];

    constructor(d : Date) {
        this._calendarModel = new CalendarModel(d);
        this._calendarDayOfWeek  = [
            {
                name:ShortDayOfWeek.SUN,
                color: 'red'
            },
            {
                name:ShortDayOfWeek.MON,
                color: 'gray'
            },
            {
                name:ShortDayOfWeek.TUE,
                color: 'gray'
            },
            {
                name:ShortDayOfWeek.WED,
                color: 'gray'
            },
            {
                name:ShortDayOfWeek.THU,
                color: 'gray'
            },
            {
                name:ShortDayOfWeek.FRI,
                color: 'gray'
            },
            {
                name:ShortDayOfWeek.SAT,
                color: '#588dff'
            },
        ];
    }

    get calendarDayOfWeek(): ICalendarDayOfWeek[] {
        return this._calendarDayOfWeek;
    }

    @computed
    get result(){
        const firstDay = this._calendarModel.firstDay;
        const lastDay = this._calendarModel.lastDay;
        return createCalendarDay(firstDay, lastDay);
    }

    @computed
    get currentDate(){
        const currentDay = this._calendarModel.day;
        return `${currentDay.getFullYear()}년 ${currentDay.getMonth() + 1}월`
    };

    nextMonthClick(){
        const currentDay = this._calendarModel.day;
        this._calendarModel.changeDay(
            new Date(currentDay.getFullYear(), currentDay.getMonth() + 1)
        )
    }

    prevMonthClick(){
        const currentDay = this._calendarModel.day;
        this._calendarModel.changeDay(
            new Date(currentDay.getFullYear(), currentDay.getMonth() - 1)
        )
    }
}