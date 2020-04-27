import React from 'react';

import classNames from 'classnames/bind';
import css from './Layout.scss';
const cx = classNames.bind(css);

const Header  = () => {
    return (
        <header id={cx('header')}>
            여기는 헤더
        </header>
    )
};

export default Header;