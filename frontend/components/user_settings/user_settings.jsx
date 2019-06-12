import React from 'react';
import { connect } from 'react-redux';
import { fetchOneUser, updateUserAvatar } from '../../actions/users_actions';


class UserSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageUrl: '',
            imageFile: null,
            avatar: this.props.user.avatar
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileSelect = this.handleFileSelect.bind(this);
    }

    componentDidMount() {
        this.props.fetchOneUser(this.props.match.params.userId)
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if(prevState.avatar !== nextProps.user.avatar) {
    //         return { avatar: nextProps.user.avatar }
    //     } else {
    //         return null;
    //     }
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.avatar);
        if(prevState.avatar !== this.props.user.avatar) {
            this.props.fetchOneUser(this.props.match.params.userId)
                .then(() => this.setState({ avatar: this.props.user.avatar }))
        }
    }

    handleFileSelect(e) {  
        const reader = new FileReader();

        const file = e.currentTarget.files[0];
        reader.onloadend = () => this.setState({ imageUrl: reader.result, imageFile: file });

        if (file) {
            reader.readAsDataURL(file);
          } else {
            this.setState({ imageUrl: "", imageFile: null });
          }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();

        formData.append('user[url]', this.state.imageUrl);
        
        if (this.state.imageUrl) {
            formData.append('user[avatar]', this.state.imageFile);
        }
        
        $.ajax({
          url: `/api/users/${this.props.user.id}`,
          method: 'PATCH',
          data: formData,
          contentType: false,
          processData: false
        });
        this.setState({ avatar: this.state.imageUrl });
        // .then(res => setState({avatar: res}));
      }

    render() {

        return (
            <div className="settings-page-container">
                <h1>Settings</h1>
                <div className="bottom-border"></div>

                <div className="profile-picture">Profile Picture</div>

                <div className="profile-picture-box">
                    <img src={this.state.avatar} alt="user avatar" height="96" width="96"/>
                    <input type="file" id="file" className="inputfile" onChange={this.handleFileSelect}/>
                    <label htmlFor="file" >Update Profile Picture</label>
                    <input type="submit" onClick={this.handleSubmit}/>
                    {/* <i class="fas fa-trash-alt"></i> */}
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



const mstp = (state, ownProps) => {
    const user = state.entities.users[ownProps.match.params.userId]
    return {
        user,
        updated: false
    };
};

const mdtp = dispatch => {
    return {
        fetchOneUser: id => dispatch(fetchOneUser(id)),
        updateUserAvatar: (id, avatar) => dispatch(updateUserAvatar(id, avatar))
    };
};

export default connect(mstp, mdtp)(UserSettings);