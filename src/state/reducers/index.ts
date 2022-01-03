import { combineReducers } from "redux"
import userReducers from "./userReducer"
import feedReducers from "./feedReducer"

const reducers = combineReducers({
    User: userReducers,
    Feeds: feedReducers
})

export default reducers;
export type State = ReturnType<typeof reducers>