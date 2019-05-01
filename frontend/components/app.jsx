import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container';
import RightNavContainer from '../components/right_nav/right_nav_container';

const App = () => (
    <div>
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
        </div>

        <Route path="/signup" container={SignupFormContainer} />
        <Route path="/login" container={LoginFormContainer} />
    </div>
);

export default App;