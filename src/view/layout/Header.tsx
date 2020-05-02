import React from 'react';
import {observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './Layout.scss';
const cx = classNames.bind(css);

import {NAVI_TYPE} from "../../type";
import RootVM from "../../viewModel/RootVM";

interface IHeader{
    VM : RootVM
}

const Header  = observer((prop: IHeader) => {
    const handleChange = (state :NAVI_TYPE) => {
        prop.VM.chageNaviState(state)
    };

    return (
        <header id={cx('header')}>
            <a href={"#"} onClick={()=>{handleChange('MAIN')}}>오늘을 이기자</a>
        </header>
    )
});

export default Header;