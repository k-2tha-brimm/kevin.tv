import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import gamesReducer from './games_reducer';
import streamersReducer from './streamers_reducer';
import streamsReducer from './streams_reducer'

export default combineReducers({
    users: usersReducer,
    games: gamesReducer,
    streamers: streamersReducer,
    streams: streamsReducer
});