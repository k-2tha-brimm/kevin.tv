import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const StreamerVideo = ({streamer}) => {

    return (
        <>
        <div className="channel-header-container">
            <div className="user-information-top-bar">
                <ul>
                    <li className="streamer-username"><li className="streamers-videos"><Link to={`/channel/${streamer.id}`} streamer={streamer}>{streamer.username}</Link></li></li>
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
    </>
    )

}





const mapStateToProps = (state, ownProps) => {
    let streamer = state.entities.streamers[ownProps.match.params.userId];
    if(streamer){
        return {
            streamer
        }
    }
};

const mapDispatchToProps = dispatch => {
    return {

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(StreamerVideo);