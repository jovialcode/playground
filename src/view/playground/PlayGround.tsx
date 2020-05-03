import React from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './PlayGround.scss';
const cx = classNames.bind(css);

import GameList from "./GameList";
import Game from "./Game";
import {GAME} from "../../type";
import NoGame from "./NoGame";

const PlayGround  = observer(() => {
    const {playGroundVM} = React.useContext(MobXProviderContext);
    const currentGame : GAME = playGroundVM.currentGame;

    return (
        <div className={cx('wrap')}>
            <div className={cx('gameWrap')}>
                <GameList/>
                {currentGame.title !== 'none' ? <Game/> : <NoGame/>}
            </div>
        </div>
    )
});

export default PlayGround;