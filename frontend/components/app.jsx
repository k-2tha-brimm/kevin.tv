import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import RightNavContainer from '../components/right_nav/right_nav_container';
import LeftHandContainer from '../components/left_hand_menu/left_hand_container'
import GamesIndexContainer from './games/games_index_container';
import StreamerIndexContainer from '../components/streamers/streamer_index_container';
import StreamerChannelContainer from '../components/streamers/streamer_channel_container';
import StreamerVideo from '../components/streamers/streamer_video_page'; 
import Jumbotron from '../components/jumbotron/jumbotron';
import UserSettings from '../components/user_settings/user_settings';
import Modal from '../components/modal/modal';

const App = () => (
    <div>

        <Modal />

        <div className="top-nav">

            
            <div className="nav-left">
                <ul>
                    <li className="kevin-tv-logo"><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Kevin.Tv</Link></li>
                    <li>Discover</li>
                    <li className="link-button"><Link to="/directory" style={{color: "rgb(210, 206, 219)", textDecoration: 'none' }}>Browse</Link></li>
                </ul>
            </div>

            <div className="right-nav">
                <ul>
                    <RightNavContainer />
                </ul>
            </div>

        </div>

        <div className="left-hand-side-nav-bar">
            <LeftHandContainer />
        </div>

        <Switch>
            <Route exact path="/directory" component={GamesIndexContainer} />
            <Route exact path="/directory/:gameId" component={StreamerIndexContainer} />
            <Route exact path="/channel/:userId" component={StreamerChannelContainer} />
            <Route exact path="/channel/:userId/videos" component={StreamerVideo} />
            <ProtectedRoute exact path="/channel/:userId/settings" component={UserSettings}/>
            <Route path="/" component={Jumbotron} />
        </Switch>

    </div>
);

export default App;