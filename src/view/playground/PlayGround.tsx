import React from 'react';
import {observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './PlayGround.scss';
const cx = classNames.bind(css);

import GameList from "./GameList";
import Game from "./Game";

const PlayGround  = observer(() => {

    return (
        <div className={cx('wrap')}>
            <div className={cx('gameWrap')}>
                <GameList/>
                <Game/>

            </div>
        </div>
    )
});

export default PlayGround;