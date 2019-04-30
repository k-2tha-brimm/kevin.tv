import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import usersReducer from './users_reducer';

const rootReducer = combineReducers({
    session: sessionReducer,
    users: usersReducer
});

export default rootReducer;