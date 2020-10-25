import React from 'react';
import {renderLog, urlParser} from "@util";
import {MobXProviderContext, observer} from "mobx-react";
import ArticleVO from "../../valueObject/ArticleVO";

import classNames from 'classnames/bind';
import css from './Article.scss';
const cx = classNames.bind(css);

const Article = observer(() => {
    renderLog('page1');
    const {flickVM} = React.useContext(MobXProviderContext);
    const sn = urlParser(location.pathname, 'article');

    const articleVO : ArticleVO = flickVM.getArticle(parseInt(sn));

    return articleVO? (
        <div className={cx('articleWrap')}>
            <div className={cx('article')}>
                <h2 className={cx('title')}>{articleVO.title}</h2>
                <div className={cx('content')}>
                    {articleVO.content}
                </div>
            </div>
        </div>
    ) : null;
});

export default Article;