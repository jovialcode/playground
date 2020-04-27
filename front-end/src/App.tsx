import ReactDOM from "react-dom";
import React from 'react';
import Header from "./view/layout/Header";

import classNames from 'classnames/bind';
import css from './view/layout/Layout.scss';
const cx = classNames.bind(css);

const App = () => {
    return (
        <div className={cx('wrap')}>
            <Header/>
        </div>
    );
};

const root = document.getElementById("app");
ReactDOM.render(<App />, root);