import ReactDOM from "react-dom";
import React from 'react';

import classNames from 'classnames/bind';
import css from './view/layout/Layout.scss';
const cx = classNames.bind(css);

/*View*/
import Header from "./view/layout/Header";
import Navigation from "./view/layout/Navigation";
import Footer from "./view/layout/Footer";
import ContentContainer from "./view/layout/ContentContainer";
import Main from "./view/Main";

const App = () => {
    return (
        <div className={cx('wrap')}>
            <Header/>
            <Navigation/>
            <ContentContainer
                children={<Main/>}
            />
            <Footer/>
        </div>
    );
};

const root = document.getElementById("app");
ReactDOM.render(<App />, root);