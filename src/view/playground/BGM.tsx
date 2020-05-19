import React from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './PlayGround.scss';
const cx = classNames.bind(css);

import {renderLog} from "@util";
import {BGM_STATE_TYPE} from "@type";

const BGM  = observer(()=> {
    renderLog('Score');

    const {playGroundVM} = React.useContext(MobXProviderContext);
    const bgmState : BGM_STATE_TYPE = playGroundVM.bgmState;

    const clickHandler = (v : BGM_STATE_TYPE) =>{
        playGroundVM.changeBGMState(v);
    }

    return (
        <div className={cx('bgm')}>
        {
            bgmState === BGM_STATE_TYPE.PLAY ?
                <button className={cx('bgmMute')} onClick={()=>{clickHandler(BGM_STATE_TYPE.MUTE)}}></button>
                : <button className={cx('bgmPlay')} onClick={()=>{clickHandler(BGM_STATE_TYPE.PLAY)}}></button>
        }
        </div>
    )
});

export default BGM;
