import React from 'react';
import {MobXProviderContext, observer} from "mobx-react";
import {GrFormPrevious, GrFormNext} from "react-icons/gr";

import classNames from 'classnames/bind';
import css from './Calendar.scss';
const cx = classNames.bind(css);

import {ICalendarDay, ICalendarDayOfWeek} from "../../../type/Calendar";

interface IWeek{
    weekList : ICalendarDayOfWeek[]
}

interface IDays{
    dayList : ICalendarDay[][]
}

const Week = (prop: IWeek) => {
    return (
        <div className={cx('row')}>
            {
                prop?.weekList.map((v: ICalendarDayOfWeek, idx:number) => {
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
                prop?.dayList.map( (arr : ICalendarDay[], rowIdx : number) => {
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


const Calendar  = observer(() => {
    const {calendarVM} = React.useContext(MobXProviderContext);

    const week = calendarVM.calendarDayOfWeek;
    const days = calendarVM.result;
    const currentDate = calendarVM.currentDate;

    return (
        <div className={cx('calendar')}>
            <div className={cx('head')}>
                <button><GrFormPrevious/></button>
                <span className="title">{currentDate}</span>
                <button><GrFormNext/></button>
            </div>
            <div className={cx('body')}>
                <Week weekList={week}/>
                <Days dayList={days}/>
            </div>
        </div>
    )
});

export default Calendar;