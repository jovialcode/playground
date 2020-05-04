import React from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './PlayGround.scss';
const cx = classNames.bind(css);

import {GAME, NAVI_TYPE} from "../../type";
import {renderLog} from "../../util";

const Rank  = observer(()=> {
    const {playGroundVM} = React.useContext(MobXProviderContext);
    const gameList = playGroundVM.gameList;

    renderLog('rank');

    return (
        <ul className={cx('rank')}>
            {
                gameList?.map((game:GAME)=>{
                    return (
                        <li key={game.id}>
                            <h3>{game.title}</h3>
                        </li>
                    );
                })
            }
        </ul>
    )
});

export default Rank;