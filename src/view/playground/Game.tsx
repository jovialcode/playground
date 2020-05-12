import React, {useEffect, useRef} from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './PlayGround.scss';
const cx = classNames.bind(css);

import {GAME_TYPE} from "@type/Game";

const Game  = observer(()=> {
    const {playGroundVM} = React.useContext(MobXProviderContext);
    const currentGame : GAME_TYPE = playGroundVM.currentGame;

    return (
        <div id='game' className={cx('game')}>
            {currentGame.title === 'none' ? '선택된 게임없음' : ''}
        </div>
    )
});

export default Game;
