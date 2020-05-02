import React from 'react';
import {observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './List.scss';
import MainVM from "../../viewModel/MainVM";
const cx = classNames.bind(css);

interface IMain{
    VM : MainVM
}

const Main  = observer((prop: IMain) => {
    const mainVM = prop.VM;
    const mainArticle = mainVM.mainArticle;

    return (
        <div className={cx('wrap')}>
            <div id={cx('main')}>
                {mainArticle && mainArticle.title}
            </div>
        </div>
    )
});

export default Main;