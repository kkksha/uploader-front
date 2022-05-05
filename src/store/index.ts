
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import loginReducer from "./reducers/loginReducer";

const rootReducer = combineReducers({
    user: loginReducer,
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
