import merge from 'lodash/merge';
import { RECEIVE_GAME } from '../actions/games_actions';
import { RECEIVE_USER } from '../actions/users_actions';

const streamsReducer = (state = {}, action ) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_GAME:
            let streams = action.streams;
            return merge({}, state, streams )
        case RECEIVE_USER:
            
        default:
            return {};
    }
}

export default streamsReducer;