import React, {useEffect} from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './PlayGround.scss';
const cx = classNames.bind(css);

import {GAME} from "../../type";

import GameList from "./GameList";
import Game from "./Game";
import Rank from "./Rank";
import NoGame from "./NoGame";
import {modeChange} from "../../helper";
import {renderLog} from "../../util";

const PlayGround  = observer(() => {
    renderLog('PlayGround');
    const {playGroundVM} = React.useContext(MobXProviderContext);
    const currentGame : GAME = playGroundVM.currentGame;

    useEffect(()=>{
        //모드 색상 변경
        modeChange('BLACK');
    },[]);

    return (
        <div className={cx('wrap')}>
            <div className={cx('gameWrap')}>
                <GameList/>
                <Game/>
                <Rank/>
            </div>
        </div>
    )
});

export default PlayGround;