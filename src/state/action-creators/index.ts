import { ActionType } from "../types"
import { Dispatch } from "redux"
import { Action as UserAction } from "../actions/userAction"
import { Action as FeedAction } from "../actions/articleAction"

export const CurrentUser = (user: any) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: ActionType.USER,
            payload: user
        })
    }
}
export const UpdatePage = (page: number) => {
    return (dispatch: Dispatch<FeedAction>) => {
        dispatch({
            type: ActionType.FEED_PAGE,
            payload: page
        })
    }
}