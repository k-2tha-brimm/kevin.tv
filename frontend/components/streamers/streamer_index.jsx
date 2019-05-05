import React from 'react';
import { Route } from 'react-router-dom';

class StreamerIndex extends React.Component {
    componentDidMount() {
        this.props.fetchOneGame(this.props.match.params.gameId)
    }

    render () {

        return (

            <div className="streamers-index-container">
                <div className="content-container-for-streamer-index">
                    <div className="thumbnail-image"><img className="thumbnail-image" src={this.props.game.photoUrl} alt={this.props.game.title} height="173" width="130"/></div>
                    <p>{this.props.game.title}</p>
                </div>
            </div>
            
        )
    }
}

export default StreamerIndex;