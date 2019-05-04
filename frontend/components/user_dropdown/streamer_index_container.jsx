import React from 'react';
import { fetchOneGame } from '../../utils/games_util';
import { connect } from 'react-redux';
import { selectAllStreamers } from '../../reducers/selector';
import StreamerIndex from './streamer_index';

const mapStateToProps = (state, ownProps) => {
    const game = state.entities.games[ownProps.match.params.gameId]
    return {
        game,
        streamers: game.streamers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchOneGame: id => dispatch(fetchOneGame(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamerIndex)