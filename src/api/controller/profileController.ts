import request from "../request"

export function getProfile(username: String){
    return request({
        method: 'get',
        url: `/api/profile/${username}`,
        contentType: 'application/json',
    })
}