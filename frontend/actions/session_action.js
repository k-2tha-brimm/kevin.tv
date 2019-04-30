import * as SessionApiUtils from '../utils/session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const signup = user => dispatch (
    SessionApiUtils.signup(user)
        .then(user => 
             (dispatch(receiveCurrentUser(user))),
             err => 
             (dispatch(receiveSessionErrors(err.responseJSON))))
)

export const login = user => dispatch (
    SessionApiUtils.login(user)
        .then(user => 
             (dispatch(receiveCurrentUser(user))),
             err => 
             (dispatch(receiveSessionErrors(err.responseJSON))))
)

export const logout = () => dispatch (
    SessionApiUtils.logout()
        .then(() => dispatch(logoutCurrentUser()))
)