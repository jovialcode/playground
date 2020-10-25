import React from 'react';
import {renderLog, urlParser} from "@util";
import {MobXProviderContext, observer} from "mobx-react";
import ArticleVO from "../../valueObject/ArticleVO";

const Article = observer(() => {
    renderLog('page1');
    const {flickVM} = React.useContext(MobXProviderContext);
    const sn = urlParser(location.pathname, 'article');

    const articleVO : ArticleVO = flickVM.getArticle(sn);

    return articleVO? (
        <div>
            <h3>{articleVO.title}</h3>
        </div>
    ) : null;
});

export default Article;