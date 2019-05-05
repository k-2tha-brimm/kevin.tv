import React from 'react';
import { Route } from 'react-router-dom';

class StreamerIndex extends React.Component {
    componentDidMount() {
        this.props.fetchOneGame(this.props.match.params.gameId)
    }

    render () {

        return (

            <div className="streamers-index-container">
                <p>HELLO THERE</p>
            </div>
            
        )
    }
}

export default StreamerIndex;