import React, {useEffect} from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './Main.scss';
import {modeChange, pageTheme, renderLog} from "@util";
import BGMManager from "@core/BGMManager";

const cx = classNames.bind(css);

const Main  = observer(() => {
    renderLog('main');
    const {mainVM} = React.useContext(MobXProviderContext);
    const mainArticle = mainVM.mainArticle;

    useEffect(()=>{
        //모드 색상 변경
        modeChange('WHITE');
        BGMManager.remove();
    },[]);

    return (
        <div id={cx('main')}>
            {mainArticle && mainArticle.title}
            Main Empty
        </div>
    )
});

export default Main;