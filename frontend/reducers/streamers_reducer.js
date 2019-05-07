import merge from 'lodash/merge';
import { RECEIVE_GAME } from '../actions/games_actions';
import { RECEIVE_USER } from '../actions/users_actions';

const streamersReducer = (state = {}, action ) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER:
            let streamer = action.user;
            return merge({}.state, streamer);
        case RECEIVE_GAME:
            let streamers = action.streamers;
            return merge({}, state, streamers )
        default:
            return {};
    }
}

export default streamersReducer;