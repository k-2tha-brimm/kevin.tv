import merge from 'lodash/merge';
import { RECEIVE_GAME } from '../actions/games_actions';

const streamersReducer = (state = {}, action ) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_GAME:
            let streamers = action.streamers;
            return merge({}, state, streamers )
        default:
            return {};
    }
}

export default streamersReducer;