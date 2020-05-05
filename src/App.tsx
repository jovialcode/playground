import ReactDOM from "react-dom";
import React, {useEffect} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {observer, Provider} from "mobx-react";

import classNames from 'classnames/bind';
import css from './view/layout/Layout.scss';
const cx = classNames.bind(css);

/*UTIL*/
import {renderLog} from "./util";

/*View*/
import Header from "./view/layout/Header";
import Navigation from "./view/layout/Navigation";
import Footer from "./view/layout/Footer";

import Main from "./view/main/Main";
import PlayGround from "./view/playground/PlayGround";
import Life from "./view/life/Life";
import Flick from "./view/flick/Flick";

/*ViewModel*/
import MainVM from "./viewModel/MainVM";
import RootVM from "./viewModel/RootVM";
import PlayGroundVM from "./viewModel/PlayGroundVM";

/*new Object*/
const root = document.getElementById("app");
const rootVM = new RootVM();

const App = observer(() => {
    renderLog('app render');

    return (
        <div className={cx('wrap')}>
            <BrowserRouter>
                <Header VM={rootVM}/>
                <Navigation/>
                <Route exact path="/" >
                    <Provider mainVM={new MainVM()}>
                        <Main/>
                    </Provider>
                </Route>

                <Route path="/life" >
                    <Provider playGroundVM={new PlayGroundVM()}>
                        <Life/>
                    </Provider>
                </Route>

                <Route path="/flick" >
                    <Provider playGroundVM={new PlayGroundVM()}>
                        <Flick/>
                    </Provider>
                </Route>

                <Route path="/playground" >
                    <Provider playGroundVM={new PlayGroundVM()}>
                        <PlayGround/>
                    </Provider>
                </Route>
                <Footer/>
            </BrowserRouter>
        </div>
    );
});

ReactDOM.render(<App />, root);