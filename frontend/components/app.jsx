import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container';
import RightNavContainer from '../components/right_nav/right_nav_container';
import LeftHandContainer from '../components/left_hand_menu/left_hand_container'
import GamesIndexContainer from './games/games_index_container'
import Modal from '../components/modal/modal';

const App = () => (
    <div>

        <Modal />

        <div class="top-nav">

            
            <div class="nav-left">
                <ul>
                    <li className="kevin-tv-logo"><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Kevin.Tv</Link></li>
                    <li className="link-button"><Link to="/directory" style={{color: "rgb(210, 206, 219)", textDecoration: 'none' }}>Discover</Link></li>
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
            <LeftHandContainer />
        </div>

        <div className="jumbotron">
            <h1>I am a placeholder for something far greater</h1>
        </div>

        <Route path="/directory" component={GamesIndexContainer} />
    </div>
);

export default App;