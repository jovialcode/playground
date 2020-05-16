import React from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './PlayGround.scss';
const cx = classNames.bind(css);

import {renderLog} from "@util";
import Rank from "./Rank";

const Score  = observer(()=> {
    renderLog('Score');

    const {playGroundVM} = React.useContext(MobXProviderContext);
    const gameScore = playGroundVM.gameScore;

    return (
        <div className={cx('score')}>
            <div className={cx('currentScore')}>
                {gameScore}
            </div>
            <Rank/>
        </div>
    )
});

export default Score;
