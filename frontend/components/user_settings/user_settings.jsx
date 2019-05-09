import React from 'react';
import { connect } from 'react-redux';
import { fetchOneUser } from '../../actions/users_actions';


class UserSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            avatar: null
        }
    }

    componentDidMount() {
        this.props.fetchOneUser(this.props.match.params.userId)
    }

    // handleFileSelect = e => {

    // }

    // handleFileUpload = () => {

    // }

    render() {
        return (
            <div className="settings-page-container">
                <h1>Settings</h1>
                <div className="bottom-border"></div>

                <div className="profile-picture">Profile Picture</div>

                <div className="profile-picture-box">
                    <input type="file" id="file" className="inputfile" onChange={this.handleFileSelect}/>
                    <label htmlFor="file" onClick={this.handleFileUpload}>Update Profile Picture</label>
                </div>


                <div className="profile-picture">Profile Settings</div>
                <div className="profile-settings-desc">Change identifying details about your Kevin.Tv account.</div>

                <div className="settings-box">
                    <div className="profile-settings-box">
                        
                        <div className="left-settings-input">
                            <div className="settings-label">Username</div>
                        </div>
                            
                        <div className="right-settings-input">
                            <input type="text"
                                    className="settings-input" />
                            <div className="profile-settings-username-desc">You may not update your username at this time.</div>
                        </div>

                    </div>
                    
                    <div className="profile-bio-box">
                        <div className="left-settings-input">
                            <div className="settings-label">Bio</div>
                        </div>
                            
                        <div className="right-settings-input">
                            <textarea type="text"
                                    className="settings-input"
                                    row="10" ></textarea>
                            <div className="profile-settings-username-desc">Tell us a little bit about yourself!.</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    const user = state.entities.users[ownProps.match.params.userId]
    return {
        user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchOneUser: id => dispatch(fetchOneUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);