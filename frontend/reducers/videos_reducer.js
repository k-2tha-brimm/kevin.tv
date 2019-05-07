import { RECEIVE_STREAMER } from '../actions/users_actions';
import merge from 'lodash/merge';

const videosReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_STREAMER:
            return merge({}, state, action.videos)
        default:
            return state;
    }
}

export default videosReducer;