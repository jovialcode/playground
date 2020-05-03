import React from 'react';

import classNames from 'classnames/bind';
import css from './Layout.scss';
const cx = classNames.bind(css);

const Footer  = () => {
    return (
        <footer id={cx('footer')}>
            <div className={cx('left')}>
                JovialCode's PlayGround
            </div>

            <div className={cx('right')}>
                email : jovialcoding@gmail.com
            </div>

        </footer>
    )
};

export default Footer;