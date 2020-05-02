import React from 'react';
import {observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './Layout.scss';
const cx = classNames.bind(css);

import RootVM from "../../viewModel/RootVM";
import {NAVI_TYPE} from "../../type";

interface INavigation{
    VM : RootVM
}

const Navigation  = observer((prop : INavigation) => {
    const currentOn = prop.VM.currentOn;
    const handleChange = (state :NAVI_TYPE) => {
        prop.VM.chageNaviState(state)
    };

    return (
        <nav id={cx('navigation')}>
            <ul>
                <li><a href="#LIFE" onClick={()=>{handleChange('LIFE')}}>생활</a></li>
                <li><a href="#FLICK" onClick={()=>{handleChange('FLICK')}}>정리정돈</a></li>
                <li><a href="#PLAY_GROUND" onClick={()=>{handleChange('PLAY_GROUND')}}>오락실</a></li>
            </ul>
        </nav>
    )
});

export default Navigation;