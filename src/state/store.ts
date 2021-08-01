import { createStore, applyMiddleware, compose } from 'redux'
import reducers from "./reducers/index"
import thunk from "redux-thunk"

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
      }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = [applyMiddleware(thunk)];
export const store = createStore(
    reducers,
    {},
    composeEnhancers(...enhancers),
)