import React from 'react';

// Greeting will eventually need to be an avatar with a dropdown menu
// for now it is simply styled as text

const RightNav = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <nav className="right-nav-signed-out">
            <button className="login-button" onClick={() => openModal('login')}>Log In</button>
            <button className="signup-button" onClick={() => openModal('signup')}>Sign Up</button>
        </nav>
    );

    const greeting = () => (
        <nav className="right-nav-signed-in"> 
            <li className="user-avatar">Welcome to Kevin.Tv, { currentUser.username }!</li>
            <button className="nav-logout-button" onClick={logout}>Sign Out</button>
        </nav>
    );
    return currentUser ? greeting(currentUser, logout) : sessionLinks();
}

export default RightNav;