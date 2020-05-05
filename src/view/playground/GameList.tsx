import React from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './PlayGround.scss';
const cx = classNames.bind(css);

import {GAME, NAVI_TYPE} from "../../type";
import {renderLog} from "../../util";

const GameList  = observer(()=> {
    const {playGroundVM} = React.useContext(MobXProviderContext);
    const gameList = playGroundVM.gameList;

    renderLog('gameList');

    const handleChange = (game : GAME) => {
        playGroundVM.changeGame(game)
    };

    return (
        <ul className={cx('gameList')}>
            {
                gameList?.map((game:GAME)=>{
                    return (
                        <li key={game.id}>
                            <button onClick={()=>{handleChange(game)}}>
                                {game.title}
                            </button>
                        </li>
                    );
                })
            }
        </ul>
    )
});

export default GameList;