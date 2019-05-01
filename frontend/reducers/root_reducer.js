import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import usersReducer from './users_reducer';
// this will likely end up folded into entities reducer
import errorsReducer from './errors_reducer';

// we will also need a ui reducer eventually for the modal

const rootReducer = combineReducers({
    session: sessionReducer,
    // users: usersReducer,
    errors: errorsReducer
});

export default rootReducer;