import React from 'react';
import {MobXProviderContext, observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './Flick.scss';
const cx = classNames.bind(css);
import {renderLog} from "@util";
import ArticleVO from "../../valueObject/ArticleVO";

import {NavLink} from "react-router-dom";

const ArticleList = observer(() => {
    renderLog('articleList');
    const {flickVM} = React.useContext(MobXProviderContext);
    const articleList = flickVM.getArticleList;

    const concatKeyword = (keywordList : string[]) => {
        return keywordList.map(val => `#${val}`).join(' ');
    };

    return (
        <ul className={cx('articleList')}>
            {
                articleList?.map((article: ArticleVO) => {
                    return (
                        <li key={article.sn}>
                            <NavLink to={'/article/' + article.sn}>
                                <h3 className={cx('articleTitle')}>{article.title}</h3>
                                <p className={cx('articleContent')}>{article.content}</p>
                                {
                                    article.keyword.length != 0 ? <div className={cx('articleKeyword')}>{concatKeyword(article.keyword)}</div> : null
                                }
                            </NavLink>
                        </li>
                    );
                })
            }
        </ul>
    )
});

export default ArticleList;