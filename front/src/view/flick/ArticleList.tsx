import React from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './Flick.scss';
import {renderLog} from "@util";
import ArticleVO from "../../valueObject/ArticleVO";
import {NavLink} from "react-router-dom";

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
                            <NavLink to={'/article/' + article.sn}>
                                <h3 className={cx('articleTitle')}>{article.title}</h3>
                                <div className={cx('articleContent')}>{article.content}</div>
                            </NavLink>
                        </li>
                    );
                })
            }
        </ul>
    )
});

export default ArticleList;