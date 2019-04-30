import { RECEIVE_CURRENT_USER } from '../actions/session_action';
import {merge} from 'lodash';

const usersReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.currentUser.id]: action.currentUser })
        default:
            return state;
    }
};

export default usersReducer;