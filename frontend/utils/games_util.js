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

export const getchTenClips = title => (
    $.ajax({
        method: 'GET',
        url: `https://api.twitch.tv/kraken/clips/top?limit=10&game=${title}&trending=true`,
        headers: {
            "Client-ID": "spmus28uykcb190xqkv0abkh1uvwnc",
            "Accept": "application/vnd.twitchtv.v5+json"
        }
    })
)