import { RECEIVE_STREAMER, RECEIVE_VIDEO, RECEIVE_ALL_VIDEOS } from '../actions/users_actions';
import merge from 'lodash/merge';

const videosReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_STREAMER:
            return merge({}, state, action.videos)
        case RECEIVE_ALL_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO:
            return action.video;
        default:
            return state;
    }
}

export default videosReducer;