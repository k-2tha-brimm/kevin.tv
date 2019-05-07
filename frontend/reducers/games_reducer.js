import { RECEIVE_ALL_GAMES, RECEIVE_GAME } from '../actions/games_actions';
import { RECEIVE_STREAMER } from '../actions/users_actions';
import merge from 'lodash/merge'

const gamesReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_GAMES:
            return action.games
        case RECEIVE_GAME:
            let game = action.game
            return merge({}, state, { [game.id]: game });
        case RECEIVE_STREAMER:
            return merge({},state, action.game)
        default:
            return state;
    }
}

export default gamesReducer;