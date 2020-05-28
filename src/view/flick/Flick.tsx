import React, {useEffect} from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './Flick.scss';
import {modeChange, renderLog} from "../../util";
import BGMManager from "@core/BGMManager";

const cx = classNames.bind(css);

const Flick  = observer(() => {
    renderLog('flick');

    useEffect(()=>{
        //모드 색상 변경
        modeChange('WHITE');
        BGMManager.remove();
    },[]);

    return (
        <div id={cx('flick')}>
            Flick Empty
        </div>
    )
});

export default Flick;