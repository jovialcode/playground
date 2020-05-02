import React, {useEffect} from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './PlayGround.scss';
const cx = classNames.bind(css);

import GameManager from "../../core/GameManager";
import {renderLog} from "../../util";

const Game  = observer(()=> {
    const {playGroundVM} = React.useContext(MobXProviderContext);

    renderLog('game');
    useEffect(()=>{
        GameManager.init();
    },[]);


    return (
        <div className={cx('game')}>
            여긴 게임 들어옮.
        </div>
    )
});

export default Game;