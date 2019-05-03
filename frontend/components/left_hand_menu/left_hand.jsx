import React from 'react';

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
            <p className="popular-channels-heading">Popular Channels</p>
            <ul className="popular-channels-items">
                <li>Keystone Light</li>
                <li>Budweiser</li>
                <li>Old Milwaukee's Best</li>
                <li>Pabst Blue Ribbon</li>
                <li>Natural Ice</li>
                <li>Hamm's</li>
            </ul>
        </div>
    );

    return currentUser ? followersList() : sessionLinks();

}

export default LeftHandMenu;