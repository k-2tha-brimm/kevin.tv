import React from 'react';
import { Link } from 'react-router-dom';

const StreamIndexItem = ({stream, streamer}) => (
    <div className="stream-index-item-information">
        <div className="game-video-thumbnail">
            <p className="stream-username-tag"><Link to={`/channel/${streamer.id}`} streamer={streamer} stream={stream} style={{color: "rgb(100, 65, 165)", textDecoration: 'none' }}>{streamer.username}</Link></p>
            <p className="stream-title-tag"><Link to={`/channel/${streamer.id}`} streamer={streamer} stream={stream} style={{color: "rgb(100, 65, 165)", textDecoration: 'none' }}>{stream.title}</Link></p>
        </div>
    </div>
);

export default StreamIndexItem;