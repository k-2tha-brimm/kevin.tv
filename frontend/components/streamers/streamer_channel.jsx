import React from 'react';
import { Route, Link } from 'react-router-dom';

class StreamerChannel extends React.Component {

    componentDidMount() {
        
    }

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
            </>
        );

    }
    
}

export default StreamerChannel;