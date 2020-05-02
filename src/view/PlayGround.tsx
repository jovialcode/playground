import React from 'react';
import {observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './PlayGround.scss';
import PlayGroundVM from "../viewModel/PlayGroundVM";
const cx = classNames.bind(css);

interface IMain{
    VM : PlayGroundVM
}

const PlayGround  = observer((prop: IMain) => {

    return (
        <div className={cx('wrap')}>
            <div id={cx('main')}>
                여긴 playGround입니다.
            </div>
        </div>
    )
});

export default PlayGround;