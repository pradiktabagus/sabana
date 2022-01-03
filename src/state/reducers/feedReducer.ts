import { Action } from "../actions/articleAction"
import { ActionType } from "../types/index"
const initialSTate = {
    page: 1
}
const reducer =  (state: any = initialSTate, action: Action) => {
    switch(action.type){
        case ActionType.FEED_PAGE:
            return action.payload
        default:
            return state
    }
}

export default reducer