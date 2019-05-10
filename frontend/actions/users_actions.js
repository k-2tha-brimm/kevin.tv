import * as UsersApiUtils from '../utils/users_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_STREAMER = "RECEIVE_STREAMER";
export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO'

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

const receiveVideos = videos => ({
    type: RECEIVE_ALL_VIDEOS,
    videos
})

const receiveOneVideo = video => ({
    type: RECEIVE_VIDEO,
    video
})

export const updateUserAvatar = (id, avatar) => dispatch => (
    UsersApiUtils.updateAvatar(id, avatar)
        .then(user => dispatch(receiveUser(user)))
);

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

export const fetchVideo = (userId, video) => dispatch => (
    UsersApiUtils.fetchOneVideo(userId, video)
        .then(video =>
            dispatch(receiveOneVideo(video)))
)