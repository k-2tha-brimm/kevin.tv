import merge from 'lodash/merge';
import { RECEIVE_GAME } from '../actions/games_actions';

const streamsReducer = (state = {}, action ) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_GAME:
            let streams = action.game.streams;
            return merge({}, state, streams )
        default:
            return {};
    }
}

export default streamsReducer;