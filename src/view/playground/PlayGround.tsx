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

const PlayGround  = observer(() => {
    renderLog('PlayGround');
    const {playGroundVM} = React.useContext(MobXProviderContext);
    const currentGame : GAME_TYPE = playGroundVM.currentGame;

    useEffect(()=>{
        //모드 색상 변경
        modeChange('BLACK');
    },[]);

    return (
        <div className={cx('wrap')}>
            <div className={cx('gameWrap')}>
                <GameList/>
                <Game/>
                <Score/>
            </div>
        </div>
    )
});

export default PlayGround;