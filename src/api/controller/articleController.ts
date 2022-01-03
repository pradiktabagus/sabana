import request from "../request"

export function PostArticle (props: any){
    return request({
        method: 'post',
        url: "/api/article",
        contentType: 'application/json',
        data: props.body
    })
}
interface feedProps {
    offset: number
    limit: number
}
export function Feeds(props: feedProps){
    const { offset, limit } = props
    return request({
        method: 'get',
        url: `/api/article/feeds?limit=${limit}&offset=${offset}`,
        contentType: 'application/json',
    })
}