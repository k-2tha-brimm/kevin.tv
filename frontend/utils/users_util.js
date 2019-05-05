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