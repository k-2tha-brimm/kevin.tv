import React from 'react';
import { Route } from 'react-router-dom';

class StreamerIndex extends React.Component {
    componentDidMount() {
        this.props.fetchOneGame(this.props.match.params.gameId)
    }
}