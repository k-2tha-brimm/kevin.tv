import React from 'react';
import { Link } from 'react-router-dom';
// Greeting will eventually need to be an avatar with a dropdown menu
// for now it is simply styled as text

const RightNav = ({ currentUser, logout, openModal }) => {

    
    const bombsAway = () => {
        if(document.getElementsByClassName("show").length > 0) {
            document.getElementsByClassName("dropdown-items")[0].classList.remove("show");
        } else {
            document.getElementsByClassName("dropdown-items")[0].classList.add("show");
        }
    }

    const sessionLinks = () => (
        <nav className="right-nav-signed-out">
            <button className="login-button" onClick={() => openModal('login')}>Log In</button>
            <button className="signup-button" onClick={() => openModal('signup')}>Sign Up</button>
            <div className="dropdown-menu">
                <button className="dropdown-trigger" onClick={() => bombsAway()}>Drop Me Down</button>
                <div className="dropdown-items">
                    <li>Language</li>
                    <br/>
                    <li>Dark Theme</li>
                    <div className="line-break"></div>
                    <li><Link className="dropdown-login" onClick={() => openModal('login')} style={{color: "rgb(100, 65, 165)", textDecoration: 'none' }} >Log In</Link></li>
                </div>
            </div>
            {/* <i className="fas fa-otter"></i> */}
        </nav>
    );

    const greeting = () => (
        <nav className="right-nav-signed-in"> 
            <li className="user-avatar">Welcome to Kevin.Tv, { currentUser.username }!</li>
            {/* <i className="fas fa-otter"></i> */}
            <div className="dropdown-menu">
                <button className="dropdown-trigger" onClick={() => bombsAway()}>Drop Me Down</button>
                <div className="dropdown-items">
                    <li>Online</li>
                    <br/>
                    <li>Channel</li>
                    <div className="line-break"></div>
                    <li><Link to={`/channel/${currentUser.id}/settings`} user={currentUser}>Settings</Link></li>
                    <br/>
                    <li>Language</li>
                    <br/>
                    <li>Dark Theme</li>
                    <div className="line-break"></div>
                    <li><button className="nav-logout-button" onClick={logout}>Sign Out</button></li>
                </div>
            </div>
            <button className="nav-logout-button" onClick={logout}>Sign Out</button>
        </nav>
    );
    return currentUser ? greeting(currentUser, logout) : sessionLinks();
}

export default RightNav;