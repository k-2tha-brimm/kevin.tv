import React from 'react';
import { Route, Link } from 'react-router-dom';

class StreamerChannel extends React.Component {

    constructor(props) {
        super(props);
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

        let {streamer, videos} = this.props;
        
        if(!streamer) {
            return null;
        }
        // debugger

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
                    {/* <iframe
                        src="https://clips.twitch.tv/embed?clip=IncredulousAbstemiousFennelImGlitch&autoplay=false"
                        height="600"
                        width="100%"
                        frameborder="0"
                        scrolling="no"
                        allowfullscreen="true">
                    </iframe> */}
                    <video width="100%" height="600" controls></video>
                    <div className="video-description">
                        <p>{this.props.stream.title}</p>
                    </div>
                </div>
                <div className="channel-description">
                    <p>It's empty in here</p>
                    <Link to={`/channel/${streamer.id}/settings`} streamer={streamer}>CLICK HERE FOR SETTINGS</Link>
                </div>
            </div>
        );

    }
    
}

export default StreamerChannel;

// <i class="far fa-heart"> </i>