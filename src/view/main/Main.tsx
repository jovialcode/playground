import React from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './Main.scss';
import {renderLog} from "../../util";
const cx = classNames.bind(css);

const Main  = observer(() => {
    const {mainVM} = React.useContext(MobXProviderContext);
    const mainArticle = mainVM.mainArticle;

    renderLog('main');

    return (
        <div className={cx('wrap')}>
            <div id={cx('main')}>
                {mainArticle && mainArticle.title}
            </div>
        </div>
    )
});

export default Main;