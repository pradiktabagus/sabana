import { ActionType } from "../types"
import { Dispatch } from "redux"
import { Action} from "../actions/userAction"
export const Login = (user: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOGIN,
            payload: user
        })
    }
}