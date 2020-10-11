import React, {useEffect} from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './Flick.scss';
import {modeChange, renderLog} from "@util";
import BGMManager from "@core/BGMManager";

import ArticleList from "./ArticleList";
import Search from "../component/search/Search";

const cx = classNames.bind(css);

const Flick  = observer(() => {
    renderLog('flick');

    const {flickVM} = React.useContext(MobXProviderContext);

    useEffect(()=>{
        //모드 색상 변경
        modeChange('WHITE');
        BGMManager.remove();
    },[]);

    return (
        <div id={cx('flick')}>
            <Search action={(value => flickVM.searchArticles(value))}/>
            <div className={cx('articleWrap')}>
                <ArticleList/>
            </div>

        </div>
    )
});

export default Flick;