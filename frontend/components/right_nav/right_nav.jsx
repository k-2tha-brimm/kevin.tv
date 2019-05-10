import React from 'react';
import { Link } from 'react-router-dom';
// Greeting will eventually need to be an avatar with a dropdown menu
// for now it is simply styled as text

class RightNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }
    }

    componentDidMount() {
        this.setState({ currentUser: this.props.currentUser })
    };
    
    componentDidUpdate(prevProps) {
        if(this.props.currentUser !== prevProps.currentUser) {
            this.setState({ currentUser: this.props.currentUser })
        };
    };
    
    render () {

        const bombsAway = () => {
            if(document.getElementsByClassName("show").length > 0) {
                document.getElementsByClassName("dropdown-items")[0].classList.remove("show");
            } else {
                document.getElementsByClassName("dropdown-items")[0].classList.add("show");
            }
        }

        const sessionLinks = () => (
            <nav className="right-nav-signed-out">
                <button className="login-button" onClick={() => this.props.openModal('login')}>Log In</button>
                <button className="signup-button" onClick={() => this.props.openModal('signup')}>Sign Up</button>
                <div className="dropdown-menu">
                    <button className="dropdown-trigger" onClick={() => bombsAway()}>Drop Me Down</button>
                    <div className="dropdown-items">
                        <li>Language</li>
                        <br/>
                        <li>Dark Theme</li>
                        <div className="line-break"></div>
                        <li><Link className="dropdown-login" onClick={() => this.props.openModal('login')} style={{color: "rgb(100, 65, 165)", textDecoration: 'none' }} >Log In</Link></li>
                    </div>
                </div>
                {/* <i className="fas fa-otter"></i> */}
            </nav>
        );

        const greeting = () => (
            <nav className="right-nav-signed-in"> 
                <li className="user-avatar">Welcome to Kevin.Tv, { this.props.currentUser.username }!</li>
                {/* <i className="fas fa-otter"></i> */}
                <div className="dropdown-menu">
                    <button className="dropdown-trigger" onClick={() => bombsAway()}>Drop Me Down</button>
                    <div className="dropdown-items">
                        <li>Online</li>
                        <br/>
                        <li><Link to={`/channel/${this.props.currentUser.id}`} user={this.props.currentUser} style={{color: "rgb(100, 65, 165)", fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", fontSize: "14px"}}>Channel</Link></li>
                        <div className="line-break"></div>
                        <li><Link to={`/channel/${this.props.currentUser.id}/settings`} user={this.props.currentUser} style={{color: "rgb(100, 65, 165)", fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", fontSize: "14px"}}>Settings</Link></li>
                        <br/>
                        <li><Link to={`/directory`} user={this.props.currentUser} style={{color: "rgb(100, 65, 165)", fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", fontSize: "14px"}}>Language</Link></li>
                        <br/>
                        <li><Link to={`/directory`} user={this.props.currentUser} style={{color: "rgb(100, 65, 165)", fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", fontSize: "14px"}}>Dark Theme</Link></li>
                        <div className="line-break"></div>
                        <li><button className="nav-logout-button" onClick={this.props.logout}>Sign Out</button></li>
                    </div>
                </div>
                <button className="nav-logout-button" onClick={this.props.logout}>Sign Out</button>
            </nav>
        );
        return this.props.currentUser ? greeting(this.props.currentUser, logout) : sessionLinks();
    }

}


export default RightNav;