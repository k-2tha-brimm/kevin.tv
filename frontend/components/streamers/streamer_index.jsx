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
        console.log(this.props.streamers);

        if(!this.props.game) {
            return null;
        }   

        let {streams} = this.props;
        let streamz;
        console.log(streams);
        console.log(this.props.game);
        if(this.props.game) {
            streamz = streams.filter((stream) => stream.game_id === this.props.game.id)
        }
        console.log(streamz);
        let daStreamz = streamz.map((streamer, idx) =>
                                                {
                                                    return <li><StreamIndexItem key={streamer.id} streamer={streamer} stream={streamz[idx]} /></li> 
                                                });

        const hasStreamers = (

            <div className="streamers-idx">
                <div className="streamers-index-container-banner">
                    <div className="content-container-for-streamer-index">
                    {/* <img className="background-image" src={this.props.game.backgroundUrl} alt=""/>   */}
                        <div className="thumbnail-image"><img className="thumbnail-image" src={this.props.game.photoUrl} alt={this.props.game.title} height="173" width="130"/></div>
                        <div className="title-streamers-viewers-count">
                            <p className="game-title">{this.props.game.title}</p>
                            <p className="follower-count">Follower Count Will Be Here</p>
                        </div>
                    </div>
                    <div className="fake-ad-container">
                        <div className="fake-advertisement">
                            <img src="/assets/totinos-pizza-rolls.jpg" alt=""/>       
                        </div>
                    </div>
                    <div className="list-of-streamers">
                        <ul>
                            { daStreamz }
                        </ul>
                    </div>
                </div>
            </div>

        )

        const hasNoStremers = (

            <div className="streamers-idx">
                <div className="streamers-index-container-banner">
                    <div className="content-container-for-streamer-index">
                    {/* <img className="background-image" src={this.props.game.backgroundUrl} alt=""/>   */}
                        <div className="thumbnail-image"><img className="thumbnail-image" src={this.props.game.photoUrl} alt={this.props.game.title} height="173" width="130"/></div>
                        <div className="title-streamers-viewers-count">
                            <p className="game-title">{this.props.game.title}</p>
                            <p className="follower-count">Follower Count Will Be Here</p>
                        </div>
                    </div>
                    <div className="fake-ad-container">
                        <div className="fake-advertisement">
                            <img src="/assets/totinos-pizza-rolls.jpg" alt=""/>       
                        </div>
                    </div>
                    <div className="sorry-message">
                        <h1>Sorry, there are no streams or videos available at this time.</h1>
                    </div>
                </div>
             </div>

        )
    

        return (

            this.props.streams.length > 0 ? hasStreamers : hasNoStremers

            );
    }
}

export default StreamerIndex;

// Still need to add follower count and viewer count for each title within the index container