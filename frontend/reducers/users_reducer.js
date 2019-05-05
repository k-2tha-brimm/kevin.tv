import { RECEIVE_CURRENT_USER } from '../actions/session_action';
import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/users_actions';
import {merge} from 'lodash';

const usersReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.currentUser.id]: action.currentUser })
        case RECEIVE_ALL_USERS:
            return action.users;
        case RECEIVE_USER:
            let newState = merge({}, state)
            return merge(newState, { [action.user.id]: action.user })
        default:
            return state;
    }
};

export default usersReducer;