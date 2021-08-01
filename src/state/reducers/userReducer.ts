import { Action } from "../actions/userAction"
import { ActionType } from "../types/index"
const initialSTate = ""
const reducer =  (state: String = initialSTate, action: Action) => {
    switch(action.type){
        case ActionType.LOGIN:
            return action.payload
        default:
            return state
    }
}

export default reducer