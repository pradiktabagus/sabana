import request from "../request"

export function RegisterController (props: any){
    return request({
        method: 'post',
        url: "/api/auth/signup",
        data: props.body
    })
}
export function LoginController (props: any){
    return request({
        method: 'post',
        url: '/api/auth/signin',
        data: props.body
    })
}