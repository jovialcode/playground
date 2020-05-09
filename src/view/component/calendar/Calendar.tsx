import React from 'react';
import {GrFormPrevious, GrFormNext} from "react-icons/gr";

import classNames from 'classnames/bind';
import css from './Calendar.scss';
const cx = classNames.bind(css);

import {createCalendarDay, getFirstDayOfMonth, getLastDayOfMonth, renderLog} from "../../../util";
import {CalendarDayOfWeek, ICalendarDay, ICalendarDayOfWeek} from "../../../type/Calendar";

interface IDays{
    result : ICalendarDay[][]
}

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

const Days = (prop: IDays) => {
    return (
        <>
            {
                prop?.result.map( (arr : ICalendarDay[], rowIdx : number) => {
                    return (<div key={rowIdx} className={cx('row')}>
                            {
                                arr.map((v: ICalendarDay, idx : number) => {
                                    return (
                                        <div key={idx} className={cx('box')}>
                                            <span className={cx('text')} style={{color:v.color}}>{v.name}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </>
    )
};


const Calendar  = () => {
    renderLog('calendar');

    const currentDay = new Date();
    const firstDay = getFirstDayOfMonth(currentDay);
    const lastDay = getLastDayOfMonth(currentDay);
    const result = createCalendarDay(firstDay, lastDay);
    const currentDate = () =>{
        return `${currentDay.getFullYear()}년 ${currentDay.getMonth() + 1}월`
    };

    return (
        <div className={cx('calendar')}>
            <div className={cx('head')}>
                <button><GrFormPrevious/></button>
                <span className="title">{currentDate()}</span>
                <button><GrFormNext/></button>
            </div>
            <div className={cx('body')}>
                <Week/>
                <Days result={result}/>
            </div>
        </div>
    )
};

export default Calendar;