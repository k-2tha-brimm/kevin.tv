import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
// Greeting will eventually need to be an avatar with a dropdown menu

const RightNav = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <nav className="right-nav-signed-out">
            <button className="login-button" onClick={() => openModal('login')}>Log In</button>
            <button className="signup-button" onClick={() => openModal('signup')}>Sign Up</button>
        </nav>
    );

    const greeting = () => (
        <nav className="right-nav-signed-in"> 
            <li>Hello, { currentUser.username }</li>
            <button className="nav-logout-button" onClick={logout}>Sign Out</button>
        </nav>
    );
    return currentUser ? greeting(currentUser, logout) : sessionLinks();
}

export default RightNav;