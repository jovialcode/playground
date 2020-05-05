import React from 'react';
import {observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './Layout.scss';
const cx = classNames.bind(css);

import RootVM from "../../viewModel/RootVM";
import {Link} from "react-router-dom";

interface IHeader{
    VM : RootVM
}

const Header  = observer((prop: IHeader) => {

    return (
        <header id={cx('header')}>
            <Link to='/'>오늘을 이기자</Link>
        </header>
    )
});

export default Header;