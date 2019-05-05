import * as UsersApiUtils from '../utils/users_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
})

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const fetchAllUsers = users => dispatch => (
    UsersApiUtils.fetchAllUsers(users)
        .then(users =>
            dispatch(receiveAllUsers(users)))
);

export const fetchOneUser = id => dispatch => (
    UsersApiUtils.fetchOneUser(id)
        .then(user =>
            dispatch(receiveUser(user)))
);