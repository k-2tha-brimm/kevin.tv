import React from 'react';
import { fetchOneGame } from '../../actions/games_actions';
import { connect } from 'react-redux';
import { selectAllStreamers, selectAllStreams } from '../../reducers/selector';
import StreamerIndex from './streamer_index';

const mapStateToProps = (state, ownProps) => {
    const game = state.entities.games[ownProps.match.params.gameId]
    // debugger
    if(game) {
        // debugger
        return {
            game,
            streamers: selectAllStreamers(state),
            streams: selectAllStreams(state)
        }
    } else {
        return {}
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchOneGame: id => dispatch(fetchOneGame(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamerIndex)