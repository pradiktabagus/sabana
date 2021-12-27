import { Action } from "../actions/userAction"
import { ActionType } from "../types/index"
const initialSTate = {
    isLogin: false
}
const reducer =  (state: any = initialSTate, action: Action) => {
    switch(action.type){
        case ActionType.USER:
            return action.payload
        default:
            return state
    }
}

export default reducer