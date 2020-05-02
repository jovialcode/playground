import React, {useEffect} from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './PlayGround.scss';
const cx = classNames.bind(css);

import GameManager from "../../core/GameManager";
import {renderLog} from "../../util";
import {GAME} from "../../type";

const NoGame  = ()=> {

    return (
        <div className={cx('noGame')}>
            게임없음.
        </div>
    )
};

export default NoGame;