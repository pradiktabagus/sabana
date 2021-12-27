import request from "../request"

export function RegisterController (props: any){
    return request({
        method: 'post',
        url: "/api/auth/signup",
        contentType: 'application/json',
        data: props.body
    })
}
export function LoginController (props: any){
    return request({
        method: 'post',
        url: '/api/auth/signin',
        contentType: 'application/json',
        data: props.body
    })
}
export function WhoMe(){
    return request({
        method: 'get',
        url:"/api/auth/me",
        contentType: 'application/json',
    })
}