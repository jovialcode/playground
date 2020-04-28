import React from 'react';
import {observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './Layout.scss';
const cx = classNames.bind(css);

import RootVM from "../../viewModel/RootVM";

interface INavigation{
    VM : RootVM
}

const Navigation  = observer((prop : INavigation) => {
    const currentOn = prop.VM.currentOn;

    return (
        <nav id={cx('navigation')}>
            <ul>
                <li><a href="#">생활</a></li>
                <li><a href="#">정리정돈</a></li>
                <li><a href="#">오락실</a></li>
            </ul>
        </nav>
    )
});

export default Navigation;