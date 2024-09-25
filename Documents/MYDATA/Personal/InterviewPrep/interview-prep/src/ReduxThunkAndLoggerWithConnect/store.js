import { createStore, combineReducers } from "redux";
import { userReducer } from "./reducer.js";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({
    userReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk));