import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_action';

const _nullUser = Object.freeze({
    id: null
})

const sessionReducer = (state=_nullUser, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // let newNewState = Object.assign({}, state, { id: action.currentUser.id })
            // return newNewState;
            return { id: action.currentUser.streamer.id };
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return state;
    }
}

export default sessionReducer;