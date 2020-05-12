import React from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './PlayGround.scss';
const cx = classNames.bind(css);

import {RANK_TYPE} from "@type/Game";
import {renderLog} from "@util/Logger";

const Rank  = observer(()=> {
    const {playGroundVM} = React.useContext(MobXProviderContext);
    const gameRank = playGroundVM.gameRank;

    renderLog('rank');

    return (
        <ul className={cx('rank')}>
            {
                gameRank?.map((rank : RANK_TYPE, index : number)=>{
                    return (
                        <li key={index}>
                            <span>이름 : {rank.name}</span><span>점수 : {rank.score}</span>
                        </li>
                    );
                })
            }
        </ul>
    )
});

export default Rank;
