import React, {useEffect} from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './Main.scss';
import {renderLog} from "../../util";
import {modeChange} from "../../helper";
const cx = classNames.bind(css);

const Main  = observer(() => {
    renderLog('main');
    const {mainVM} = React.useContext(MobXProviderContext);
    const mainArticle = mainVM.mainArticle;

    useEffect(()=>{
        //모드 색상 변경
        modeChange('WHITE');
    },[]);

    return (
        <div className={cx('wrap')}>
            <div id={cx('main')}>
                {mainArticle && mainArticle.title}
            </div>
        </div>
    )
});

export default Main;