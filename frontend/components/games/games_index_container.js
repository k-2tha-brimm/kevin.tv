import React from 'react';
import { connect } from 'react-redux';
import { selectAllGames } from '../../reducers/selector';
import { fetchAllGames } from '../../actions/games_actions';
import GamesIndex from './games_index';

const mapStateToProps = state => {
    return {
        games: selectAllGames(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllGames: games => dispatch(fetchAllGames(games))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesIndex);