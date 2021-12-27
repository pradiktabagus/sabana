import { ActionType } from "../types"
import { Dispatch } from "redux"
import { Action} from "../actions/userAction"

export const CurrentUser = (user: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.USER,
            payload: user
        })
    }
}