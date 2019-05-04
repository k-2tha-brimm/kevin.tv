export const selectAllGames = state => Object.values(state.entities.games);

export const selectAllStreamers = (state, game) => {
    return game ? game.streamers.map(streamer => { streamer[id] = streamer }) : []
};

// do we need to do this, or do we just want an array of the streamers?
// don't we already have that via association anyway?