import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const LeftHandMenu = ({ currentUser, openModal }) => {

    const sessionLinks = () => (
        <div className="left-hand-menu-signed-out">
            <div className="top-bar-join-container">
                <img src={window.communityUrl}></img>  
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
                <li><img src="./assets/userthumbnail.jpeg" height="40" width="40"/><Link to="/channel/12" style={{color: "rgb(100, 65, 165)", textDecoration: 'none', margin: '30px', marginBottom: '25px' }}>Keystone Light</Link></li>
                <li><img src="./assets/userthumbnail.jpeg" height="40" width="40"/><Link to="/channel/13" style={{color: "rgb(100, 65, 165)", textDecoration: 'none', margin: '30px', marginBottom: '25px' }}>Budweiser</Link></li>
                <li><img src="./assets/userthumbnail.jpeg" height="40" width="40"/><Link to="/directory" style={{color: "rgb(100, 65, 165)", textDecoration: 'none', margin: '30px', marginBottom: '25px' }}>Old Milwaukee's Best</Link></li>
                <li><img src="./assets/userthumbnail.jpeg" height="40" width="40"/><Link to="/directory" style={{color: "rgb(100, 65, 165)", textDecoration: 'none', margin: '30px', marginBottom: '25px' }}>Pabst Blue Ribbon</Link></li>
                <li><img src="./assets/userthumbnail.jpeg" height="40" width="40"/><Link to="/directory" style={{color: "rgb(100, 65, 165)", textDecoration: 'none', margin: '30px', marginBottom: '25px' }}>Natural Ice</Link></li>
                <li><img src="./assets/userthumbnail.jpeg" height="40" width="40"/><Link to="/directory" style={{color: "rgb(100, 65, 165)", textDecoration: 'none', margin: '30px', marginBottom: '25px' }}>Hamm's</Link></li>
            </ul>
        </div>
    );

    return currentUser ? followersList() : sessionLinks();

}

export default withRouter(LeftHandMenu);