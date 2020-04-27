import React from 'react';

import classNames from 'classnames/bind';
import css from './Layout.scss';
const cx = classNames.bind(css);

const Header  = () => {
    return (
        <header id={cx('header')}>
            <a href={"#"}>오늘을 이기자</a>
        </header>
    )
};

export default Header;