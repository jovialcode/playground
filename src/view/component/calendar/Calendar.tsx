import React from 'react';

import classNames from 'classnames/bind';
import css from './Calendar.scss';
const cx = classNames.bind(css);

import {renderLog} from "../../../util";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

const Calendar  = () => {
    renderLog('calendar');

    return (
        <div className={cx('calendar')}>
            <div className={cx('head')}>
                <button><FiChevronLeft/></button>
                <span className="title">2020년 05월</span>
                <button><FiChevronRight/></button>
            </div>
            <div className="body">
                Body
            </div>
        </div>
    )
};

export default Calendar;