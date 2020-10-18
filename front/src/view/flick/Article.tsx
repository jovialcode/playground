import React from 'react';
import {renderLog, urlParser} from "@util";
import {MobXProviderContext, observer} from "mobx-react";
import ArticleVO from "../../valueObject/ArticleVO";
import {ErrorCode} from "@type";
import ToastVM from "../../viewModel/ToastVM";

const Article = observer(() => {
    renderLog('page1');
    const {flickVM} = React.useContext(MobXProviderContext);
    const sn = urlParser(location.pathname, 'article');

    if(sn !== null) ToastVM.getInstance()?.setToastMsg(ErrorCode.PARAMETER_NOT_ALLOWDED);
    const articleVO : ArticleVO = flickVM.getArticle(1);

    return articleVO? (
        <div>
            <h3>{articleVO.title}</h3>
        </div>
    ) : null;
});

export default Article;