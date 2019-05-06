import React from 'react';
import { Link } from 'react-router-dom';

const StreamIndexItem = ({stream, streamer}) => (
    <div className="stream-index-item-information">
        <div className="game-video-thumbnail">
            {/* <p className="stream-video-thumbnail-tag"><Link to={`/channel/${streamer.id}`} streamer={streamer} style={{color: "rgb(100, 65, 165)", textDecoration: 'none' }}><img className="stream-thumbnail" src={stream.photoUrl} alt="Cannot Display" height="320" width="180"/></Link></p> */}
            {/* <p className="stream-title-tag"><Link to={`/channel/${streamer.id}`} streamer={streamer} style={{color: "rgb(100, 65, 165)", textDecoration: 'none' }}>{stream.title}</Link></p> */}
            <p className="stream-title-tag"><Link to={`/channel/${streamer.id}`} streamer={streamer} style={{color: "rgb(100, 65, 165)", textDecoration: 'none' }}>{streamer.username}</Link></p>
        </div>
    </div>
);

export default StreamIndexItem;