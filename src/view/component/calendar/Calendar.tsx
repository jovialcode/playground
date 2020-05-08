import React from 'react';
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

import classNames from 'classnames/bind';
import css from './Calendar.scss';
const cx = classNames.bind(css);

import {createCalendarDay, getFirstDayOfMonth, getLastDayOfMonth, renderLog} from "../../../util";
import {CalendarDayOfWeek, ICalendarDayOfWeek} from "../../../type/Calendar";

const CalendarBody = () => {
    const currentDay = new Date();
    const firstDay = getFirstDayOfMonth(currentDay);
    const lastDay = getLastDayOfMonth(currentDay);
    const result = createCalendarDay(firstDay, lastDay);

    const Week = () => {
        return (
            <div className={cx('row')}>
                {
                    CalendarDayOfWeek.map((v: ICalendarDayOfWeek, idx) => {
                        return (
                            <div key={idx} className={cx('box')}>
                                <span className={cx('text')} style={{color:v.color}}>{v.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    };
    const Day = () => {
        {result}
    };
    return (
        <div className={cx('body')}>
            <Week/>
        </div>
    )
}


const Calendar  = () => {
    renderLog('calendar');

    return (
        <div className={cx('calendar')}>
            <div className={cx('head')}>
                <button><FiChevronLeft/></button>
                <span className="title">2020년 05월</span>
                <button><FiChevronRight/></button>
            </div>
            <CalendarBody/>
        </div>
    )
};

export default Calendar;