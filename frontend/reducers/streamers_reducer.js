import merge from 'lodash/merge';
import { RECEIVE_GAME } from '../actions/games_actions';
import { RECEIVE_USER, RECEIVE_STREAMER } from '../actions/users_actions';

const streamersReducer = (state = {}, action ) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER:
            let streamer = action.user;
            return merge({}, state, streamer);
        case RECEIVE_GAME:
            let streamers = action.streamers;
            return merge({}, state, streamers )
        case RECEIVE_STREAMER:
            return merge({}, state, action.streamer)
        default:
            return state;
    }
}

export default streamersReducer;