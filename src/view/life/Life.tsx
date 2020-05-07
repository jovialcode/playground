import React, {useEffect} from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './Life.scss';
import {modeChange, renderLog} from "../../util";
import Calendar from "../component/calendar/Calendar";

const cx = classNames.bind(css);

const Life  = observer(() => {
    renderLog('life');

    useEffect(()=>{
        //모드 색상 변경
        modeChange('WHITE');
    },[]);

    return (
        <div className={cx('wrap')}>
            <div id={cx('life')}>
                <Calendar/>
            </div>
        </div>
    )
});

export default Life;