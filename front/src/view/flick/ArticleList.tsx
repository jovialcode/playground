import React from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './Flick.scss';
import {renderLog} from "@util";
import ArticleVO from "../../valueObject/ArticleVO";

const cx = classNames.bind(css);

const ArticleList = observer(() => {
    renderLog('articleList');
    const {flickVM} = React.useContext(MobXProviderContext);
    const articleList = flickVM.getArticleList;

    return (
        <ul className={cx('articleList')}>
            {
                articleList?.map((article: ArticleVO) => {
                    return (
                        <li key={article.sn}>
                                {article.title}
                        </li>
                    );
                })
            }
        </ul>
    )
});

export default ArticleList;