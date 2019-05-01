import React from 'react';
import { Link } from 'react-router-dom';
// Greeting will eventually need to be an avatar with a dropdown menu

const RightNav = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="right-nav-signed-out">
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
        </nav>
    );

    const greeting = () => (
        <nav className="right-nav-signed-in"> 
            <li>Hello, { currentUser.username }</li>
            <button className="nav-logout-button" onClick={logout}>Sign Out</button>
        </nav>
    );
    return currentUser ? greeting() : sessionLinks();
}

export default RightNav;