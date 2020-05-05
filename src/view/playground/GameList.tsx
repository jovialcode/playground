import React from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './PlayGround.scss';
const cx = classNames.bind(css);

import {GAME_LIST, GAME_TYPE} from "../../type";
import {renderLog} from "../../util";

const GameList  = observer(()=> {
    const {playGroundVM} = React.useContext(MobXProviderContext);
    const gameList = playGroundVM.gameList;

    renderLog('gameList');

    const handleChange = (game : GAME_TYPE) => {
        const $game = document.getElementById('game');
        //방어코드
        if(game.title === GAME_LIST.NONE || !$game) return;
        //초기화
        $game.innerHTML= '';
        //변경 요청
        playGroundVM.changeGame(game)
    };

    return (
        <ul className={cx('gameList')}>
            {
                gameList?.map((game:GAME_TYPE)=>{
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