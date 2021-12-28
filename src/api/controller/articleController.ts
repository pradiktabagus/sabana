import request from "../request"

export function PostArticle (props: any){
    return request({
        method: 'post',
        url: "/api/article",
        contentType: 'application/json',
        data: props.body
    })
}