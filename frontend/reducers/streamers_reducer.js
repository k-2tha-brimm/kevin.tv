import merge from 'lodash/merge';
import { RECEIVE_GAME } from '../actions/games_actions';

const streamersReducer = (state = {}, action ) => {
    Object.freeze(state);

    let streamers;

    switch (action.type) {
        case RECEIVE_GAME:
            streamers = action.payload.streamers;
            return merge({}, state, streamers)
        default:
            return state;
    }
}

export default streamersReducer;