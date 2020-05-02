import React from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './PlayGround.scss';
const cx = classNames.bind(css);

import {GAME_TYPE, NAVI_TYPE} from "../../type";
import {renderLog} from "../../util";

const GameList  = observer(()=> {
    const {playGroundVM} = React.useContext(MobXProviderContext);
    const gameList = playGroundVM.gameList;

    renderLog('gameList');

    const handleChange = (game :GAME_TYPE) => {
        playGroundVM.changeGame(game)
    };

    return (
        <ul className={cx('gameList')}>
            {
                gameList?.map((game:GAME_TYPE)=>{
                    return (
                        <li key={game.id}>
                            <a href={`#${game.title}`} onClick={()=>{handleChange(game)}}>
                                <h3>{game.title}</h3>
                            </a>
                        </li>
                    );
                })
            }
        </ul>
    )
});

export default GameList;