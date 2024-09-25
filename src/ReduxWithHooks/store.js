import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducer.js";
const rootReducer = combineReducers({
    counterReducer
});
export const store = createStore(rootReducer);