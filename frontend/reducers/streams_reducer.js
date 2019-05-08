import merge from 'lodash/merge';
import { RECEIVE_GAME } from '../actions/games_actions';
import { RECEIVE_USER, RECEIVE_STREAMER } from '../actions/users_actions';

const streamsReducer = (state = {}, action ) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_GAME:
            let streams = action.streams;
            return merge({}, state, streams )
        case RECEIVE_STREAMER:
            return merge({}, state, action.stream)
        default:
            return state;
    }
}

export default streamsReducer;