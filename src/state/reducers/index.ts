import { combineReducers } from "redux"
import userReducers from "./userReducer"

const reducers = combineReducers({
    User: userReducers
})

export default reducers;
export type State = ReturnType<typeof reducers>