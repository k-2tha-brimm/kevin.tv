export const selectAllGames = state => Object.values(state.entities.games);

export const selectAllStreamers = state => Object.values(state.entities.streamers);

export const selectAllStreams = state => Object.values(state.entities.streams);

export const selectAllVideos = state => Object.values(state.entities.videos);
// do we need to do this, or do we just want an array of the streamers?
// don't we already have that via association anyway?