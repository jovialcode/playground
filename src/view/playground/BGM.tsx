import React from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './PlayGround.scss';
const cx = classNames.bind(css);

import {renderLog} from "@util";
import {BGM_STATE_TYPE} from "@type";

const BGM  = observer(()=> {
    renderLog('BGM');

    const {playGroundVM} = React.useContext(MobXProviderContext);
    const bgmState : BGM_STATE_TYPE = playGroundVM.bgmState;
    const bgmVolume : number = playGroundVM.bgmVolume;

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
            <div className={cx('volumeWrap')}>
                <button className={cx('volumeDown')}>-</button>
                <span className={cx('volume')}>{bgmVolume*10} </span>
                <button className={cx('volumeUp')}>+</button>
            </div>
        </div>
    )
});

export default BGM;
