import * as UsersApiUtils from '../utils/users_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_STREAMER = "RECEIVE_STREAMER";
export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";

const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
})

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

const receiveStreamer = ({game, streamer, stream, videos}) => ({
    type: RECEIVE_STREAMER,
    game,
    streamer,
    stream,
    videos
})

const receiveVideos = ({videos, streamer}) => ({
    type: RECEIVE_ALL_VIDEOS,
    videos
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

export const fetchOneStreamer = id => dispatch => (
    UsersApiUtils.fetchOneStreamer(id)
        .then(payload =>
            dispatch(receiveStreamer(payload)))
)

export const fetchAllVideos = id => dispatch => (
    UsersApiUtils.fetchAllVideos(id)
        .then(videos =>
            dispatch(receiveVideos(videos)))
)