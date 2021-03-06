import React, {useEffect} from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './PlayGround.scss';
const cx = classNames.bind(css);

import {GAME_TYPE} from "@type";
import {modeChange, renderLog} from "@util";

import GameList from "./GameList";
import Game from "./Game";
import Score from "./Score";
import BGM from "./BGM";
import BGMManager from "@core/BGMManager";

const PlayGround  = observer(() => {
    renderLog('PlayGround');
    const {playGroundVM} = React.useContext(MobXProviderContext);
    const currentGame : GAME_TYPE = playGroundVM.currentGame;

    useEffect(()=>{
        //모드 색상 변경
        modeChange('BLACK');
        BGMManager.remove(); //이름 잘못 올라감. ㅜ
    },[]);

    return (
        <div className={cx('gameWrap')}>
            <GameList/>
            <Game/>
            <Score/>
            <BGM/>
        </div>
    )
});

export default PlayGround;