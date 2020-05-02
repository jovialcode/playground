import ReactDOM from "react-dom";
import React from 'react';
import {observer} from "mobx-react";

import classNames from 'classnames/bind';
import css from './view/layout/Layout.scss';
const cx = classNames.bind(css);

/*View*/
import Header from "./view/layout/Header";
import Navigation from "./view/layout/Navigation";
import Footer from "./view/layout/Footer";
import ContentContainer from "./view/layout/ContentContainer";

import Main from "./view/Main";
import PlayGround from "./view/PlayGround";

/*ViewModel*/
import MainVM from "./viewModel/MainVM";
import RootVM from "./viewModel/RootVM";

import PlayGroundVM from "./viewModel/PlayGroundVM";


/*new Object*/
const rootVM = new RootVM();

const App = observer(() => {
    const currentOn = rootVM.currentOn;

    const content = () =>{
        switch (currentOn) {
            case 'MAIN': {
                return <Main VM={new MainVM()}/>
            }
            case 'PLAY_GROUND':{
                return <PlayGround VM={new PlayGroundVM()}/>
            }
        }
    }

    return (
        <div className={cx('wrap')}>
            <Header VM={rootVM}/>
            <Navigation VM={rootVM}/>

            <ContentContainer
                children={content()}
            />
            <Footer/>
        </div>
    );
});

const root = document.getElementById("app");
ReactDOM.render(<App />, root);