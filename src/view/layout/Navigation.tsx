import React from 'react';
import {Link} from "react-router-dom";

import classNames from 'classnames/bind';
import css from './Layout.scss';
const cx = classNames.bind(css);

const Navigation  = () => {
    return (
        <nav id={cx('navigation')}>
            <ul>
                <li>
                    <Link to='/life'>생활</Link>
                </li>
                <li>
                    <Link to='/flick'>정리정돈</Link>
                </li>
                <li>
                    <Link to='/playground'>정리정돈</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;