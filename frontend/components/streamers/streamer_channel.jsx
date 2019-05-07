import React from 'react';
import { Route, Link } from 'react-router-dom';

class StreamerChannel extends React.Component {

    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.props.fetchOneUser(this.props.match.params.userId);
    // }

    render() {

        let {streamer} = this.props;
        
        if(!streamer) {
            return null;
        }

        return (
            <>
                <div className="channel-header-container">
                    <div className="user-information-top-bar">
                        <ul>
                            <li className="streamer-username">{streamer.username}</li>
                            <li className="streamers-videos">Videos</li>
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
                    <iframe
                        src="https://clips.twitch.tv/embed?clip=IncredulousAbstemiousFennelImGlitch&autoplay=false"
                        height="600"
                        width="100%"
                        frameborder="0"
                        scrolling="no"
                        allowfullscreen="true">
                    </iframe>
                </div>
                <div className="channel-description">
                    <p>It's enpty in here</p>
                </div>
            </>
        );

    }
    
}

export default StreamerChannel;

// <i class="far fa-heart"> </i>