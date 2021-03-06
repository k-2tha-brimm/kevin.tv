import React from 'react';
import { Route, Link } from 'react-router-dom';

class StreamerChannel extends React.Component {

    constructor(props) {
        super(props);
        this.state ={};
    }

    componentDidMount() {
        this.props.fetchOneStreamer(this.props.match.params.userId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.fetchOneStreamer(this.props.match.params.userId);
        }
      }

    render() {

        let {streamer, videos, settingsId} = this.props;

        if(!streamer) {
            return null;
        }
        
        let editForm;
        if(streamer.id === settingsId) {
            editForm = (
                <button className="edit-button" streamer={streamer} onClick={() => this.props.openModal('edit')}>Edit</button>
            )
        } else {
            editForm = null;
        }
        


        return (
            <div className="this-is-a-div">
                <div className="channel-header-container">
                    <div className="user-information-top-bar">
                        <ul>
                            <li className="streamer-username"><li className="streamers-videos"><Link to={`/channel/${streamer.id}`} videos={videos} streamer={streamer}>{streamer.username}</Link></li></li>
                            <li className="streamers-videos"><Link to={`/channel/${streamer.id}/videos`} streamer={streamer}>Videos</Link></li>
                            <li className="channel-followers">Followers</li>
                            <ul className="channel-following">
                                <li>Following</li>
                                <button className="follow-button"> Follow</button>
                            </ul>
                        </ul>
                    </div>
                    <div className="chat-box">
                        <div className="chat-box-top">
                            <p>Stream Chat</p>
                        </div>
                    </div>
                </div>
                <div className="video-player-container">
                    <video width="100%" height="600" controls></video>
                    <div className="video-description">
                        {/* <li><img src={this.props.game.photoUrl} alt="game-photo" height="65" width="52"/></li>
                        <li>{this.props.stream.title}</li> */}
                        {/* <button className="edit-button" streamer={streamer} onClick={() => this.props.openModal('edit')}>Edit</button> */}
                        { editForm }
                    </div>
                </div>
                <div className="channel-description">
                    <p>It's empty in here</p>
                    
                </div>
            </div>
        );

    }
    
}

export default StreamerChannel;

// <i class="far fa-heart"> </i>