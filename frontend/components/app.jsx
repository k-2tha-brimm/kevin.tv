import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container';
import RightNavContainer from '../components/right_nav/right_nav_container';
import LeftHandMenu from '../components/left_hand_menu/left_hand';
import Modal from '../components/modal/modal';

const App = () => (
    <div>
        <Modal />
        <div class="top-nav">

            
            <div class="nav-left">
                <ul>
                    <li className="kevin-tv-logo"><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Kevin.Tv</Link></li>
                    <li>Discover</li>
                    <li>Browse</li>
                </ul>
            </div>

            <div class="right-nav">
                <ul>
                    <RightNavContainer />
                </ul>
            </div>

        </div>
        <div class="left-hand-side-nav-bar">
            <LeftHandMenu />
        </div>

        {/* <div className="jumbotron">
            <img src="./assets/zeldabackground.jpg" alt="stream-background"/>
        </div> */}
    </div>
);

export default App;