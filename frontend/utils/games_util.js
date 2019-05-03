export const fetchAllGames = games => (
    $.ajax({
        method: 'GET',
        url: `/api/games`,
        games
    })
)

export const fetchOneGame = id => (
    $.ajax({
        method: 'GET',
        url: `api/games/${id}`
    })
)