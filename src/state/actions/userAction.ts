import { ActionType } from "../types/index"
interface UserAction {
    type: ActionType.USER,
    payload: string
}

export type Action = UserAction