import ReactDOM from "react-dom";
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {observer, Provider} from "mobx-react";

import classNames from 'classnames/bind';
import css from './view/layout/Layout.scss';
const cx = classNames.bind(css);

/*View*/
import Header from "./view/layout/Header";
import Navigation from "./view/layout/Navigation";
import Footer from "./view/layout/Footer";

import Main from "./view/main/Main";
import PlayGround from "./view/playground/PlayGround";

/*ViewModel*/
import MainVM from "./viewModel/MainVM";
import RootVM from "./viewModel/RootVM";

import PlayGroundVM from "./viewModel/PlayGroundVM";
import {renderLog} from "./util";


/*new Object*/
const rootVM = new RootVM();

const App = observer(() => {
    const currentOn = rootVM.currentOn;
    renderLog('App');

    const content = () => {
        switch (currentOn) {
            case 'MAIN': {
                return <Main VM={new MainVM()}/>
            }
            case 'PLAY_GROUND':{
                return (
                    <Provider playGroundVM={new PlayGroundVM()}>
                        <PlayGround/>
                    </Provider>
                )
            }
        }
    }

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

const root = document.getElementById("app");
ReactDOM.render(<App />, root);