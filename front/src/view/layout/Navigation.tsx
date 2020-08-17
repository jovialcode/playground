import React from 'react';
import {NavLink} from "react-router-dom";

import classNames from 'classnames/bind';
import css from './Layout.scss';
const cx = classNames.bind(css);

const Navigation  = () => {
    return (
        <nav id={cx('navigation')}>
            <ul>
                <li>
                    <NavLink to='/life' activeClassName="active">생활</NavLink>
                </li>
                <li>
                    <NavLink to='/flick' activeClassName="active">개발노트</NavLink>
                </li>
                <li>
                    <NavLink to='/playground' activeClassName="active">오락실</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;