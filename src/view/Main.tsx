import React from 'react';

import classNames from 'classnames/bind';
import css from './Main.scss';
const cx = classNames.bind(css);

const Main  = () => {
    return (
        <div className={cx('wrap')}>
            <div id={cx('main')}>
                여기는 컨텐츠가 올거입니다.
            </div>
        </div>
    )
};

export default Main;