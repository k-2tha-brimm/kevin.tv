export const fetchAllUsers = users => (
    $.ajax({
        method: 'GET',
        url: `/api/users`,
        games
    })
)

export const fetchOneUser = id => (
    $.ajax({
        method: 'GET',
        url: `api/users/${id}`
    })
)

export const fetchOneStreamer = id => (
    $.ajax({
        method: 'GET',
        url: `api/users/${id}`
    })
)

export const fetchAllVideos = (id, videos) => (
    $.ajax({
        method: 'GET',
        url: `api/users/${id}/videos`,
        videos
    })
)

export const updateAvatar = (id, avatar) => {
    $.ajax({
        method: 'PATCH',
        url: `api/users/${id}`,
        avatar
    })
}