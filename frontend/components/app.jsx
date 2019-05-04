import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container';
import RightNavContainer from '../components/right_nav/right_nav_container';
import LeftHandContainer from '../components/left_hand_menu/left_hand_container'
import GamesIndexContainer from './games/games_index_container';
import StreamerIndexContainer from '../components/user_dropdown/streamer_index_container';
import Jumbotron from '../components/jumbotron/jumbotron';
import Modal from '../components/modal/modal';

const App = () => (
    <div>

        <Modal />

        <div class="top-nav">

            
            <div class="nav-left">
                <ul>
                    <li className="kevin-tv-logo"><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Kevin.Tv</Link></li>
                    <li>Discover</li>
                    <li className="link-button"><Link to="/directory" style={{color: "rgb(210, 206, 219)", textDecoration: 'none' }}>Browse</Link></li>
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

        <Switch>
            <Route path="/directory" component={GamesIndexContainer} />
            <Route path="/directory/:gameId" component={StreamerIndexContainer} />
            <Route exact path="/" component={Jumbotron} />
        </Switch>

    </div>
);

export default App;