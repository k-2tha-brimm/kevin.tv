import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const LeftHandMenu = ({ currentUser, openModal }) => {

    const sessionLinks = () => (
        <div className="left-hand-menu-signed-out">
            <div className="top-bar-join-container">
                <img src="./assets/jointhecommunity.png" alt="community img" width="199" height="97" />
                <p className="headline">Join the Kevin.Tv Community</p>
                <p className="sub-text">Discover the best live streamers anywhere.</p>
                <button className="left-menu-signup-button" onClick={() => openModal('signup')}>Sign Up</button>
            </div>
        </div>
    );

    const followersList = () => (
        <div className="signed-in-left-nav-container">
            <p className="popular-channels-heading">Recommended Channels</p>
            <div className="nav-break"></div>
            <ul className="popular-channels-items">
                <li><Link to="/channel/12">Keystone Light</Link></li>
                <li><Link to="/channel/13">Budweiser</Link></li>
                <li>Old Milwaukee's Best</li>
                <li>Pabst Blue Ribbon</li>
                <li>Natural Ice</li>
                <li>Hamm's</li>
            </ul>
        </div>
    );

    return currentUser ? followersList() : sessionLinks();

}

export default withRouter(LeftHandMenu);