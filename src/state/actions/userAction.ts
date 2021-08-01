import { ActionType } from "../types/index"
interface UserAction {
    type: ActionType.LOGIN,
    payload: string
}

export type Action = UserAction