import * as GamesApiUtils from '../utils/games_util';

export const RECEIVE_ALL_GAMES = 'RECEIVE_ALL_GAMES';
export const RECEIVE_GAME = 'RECEIVE_GAME';

const receiveAllGames = games => ({
    type: RECEIVE_ALL_GAMES,
    games
})

const receiveGame = game => ({
    type: RECEIVE_GAME,
    game
})

export const fetchAllGames = games => dispatch => (
    GamesApiUtils.fetchAllGames(games)
        .then(games =>
            dispatch(receiveAllGames(games)))
);

export const fetchOneGame = id => dispatch => (
    GamesApiUtils.fetchOneGame(id)
        .then(game =>
            dispatch(receiveGame(game)))
);