import React from 'react';

import classNames from 'classnames/bind';
import css from './Layout.scss';
const cx = classNames.bind(css);

const Footer  = () => {
    return (
        <footer id={cx('footer')}>
            여기는 풋터
        </footer>
    )
};

export default Footer;