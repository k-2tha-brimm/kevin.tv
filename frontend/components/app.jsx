import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container';
import RightNavContainer from '../components/right_nav/right_nav_container';
import Modal from '../components/modal/modal';

const App = () => (
    <div>
        <Modal />
        <div class="top-nav">

            
            <div class="nav-left">
                <ul>
                    <li>Discover</li>
                    <li>Browse</li>
                </ul>
            </div>

            <div class="right-nav">
                <ul>
                    <RightNavContainer />
                </ul>
            </div>

            <div class="left-side-nav-bar">
                <ul>
                    
                </ul>
            </div>
        </div>
    </div>
);

export default App;