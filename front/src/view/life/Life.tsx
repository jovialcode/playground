import React, {useEffect} from 'react';
import {MobXProviderContext, observer, Provider} from "mobx-react";

import classNames from 'classnames/bind';
import css from './Life.scss';
import {modeChange, renderLog} from "@util";
import Calendar from "../component/calendar/Calendar";
import CalendarVM from "../component/calendar/CalendarVM";
import BGMManager from "@core/BGMManager";

const cx = classNames.bind(css);

const Life  = observer(() => {
    renderLog('life');

    useEffect(()=>{
        //모드 색상 변경
        modeChange('WHITE');
        BGMManager.remove();
    },[]);

    return (
        <div id={cx('life')}>
            <Provider calendarVM={new CalendarVM(new Date())}>
                <Calendar/>
            </Provider>
        </div>
    )
});

export default Life;