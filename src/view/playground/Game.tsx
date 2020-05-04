import React, {useEffect, useRef} from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './PlayGround.scss';
const cx = classNames.bind(css);

import GameManager from "../../core/GameManager";
import {GAME} from "../../type";

const Game  = observer(()=> {
    const {playGroundVM} = React.useContext(MobXProviderContext);
    const currentGame : GAME = playGroundVM.currentGame;

    useEffect(()=>{
        if(currentGame.title === 'none') return;
        const $game = document.getElementById('game');
        $game.innerHTML= '';
        GameManager.init(currentGame);
    });


    return (
        <div id='game' className={cx('game')}>
            {currentGame.title === 'none' ? '선택된 게임없음' : ''}
        </div>
    )
});

export default Game;