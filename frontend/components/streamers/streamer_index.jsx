import React from 'react';
import { Route, Link } from 'react-router-dom';
import StreamIndexItem from './stream_index_item';

class StreamerIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            game: this.props.game,
            streamers: this.props.streamers,
            streams: this.props.streams
        }
    }

    componentDidMount() {
        this.props.fetchOneGame(this.props.match.params.gameId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.gameId !== this.props.match.params.gameId) {
            this.props.fetchOneGame(this.props.match.params.gameId);
        }
      }

    render () {

    if(!this.props.game) {
        return null;
    }   

    let {streams} = this.props;

    let streamz = this.props.streamers.map(streamer =>
                                            {
                                                let stream = streams.filter(stream => stream.streamer_id === streamer.id)[0];
                                                return <li><StreamIndexItem key={streamer.id} streamer={streamer} stream={stream} /></li> 
                                            });

        return (
            <div className="streamers-idx">
                <div className="streamers-index-container-banner">
                    <div className="content-container-for-streamer-index">
                        <div className="thumbnail-image"><img className="thumbnail-image" src={this.props.game.photoUrl} alt={this.props.game.title} height="173" width="130"/></div>
                        <div className="title-streamers-viewers-count">
                            <p className="game-title">{this.props.game.title}</p>
                            <p className="follower-count">Follower Count Will Be Here</p>
                        </div>
                    </div>
                    <div className="fake-ad-container">
                        <div className="fake-advertisement">
                            <p>This is going to be a fake ad</p>        
                        </div>
                    </div>
                    <div className="list-of-streamers">
                        <ul>
                            { streamz }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default StreamerIndex;

// Still need to add follower count and viewer count for each title within the index container