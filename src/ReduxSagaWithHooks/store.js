import { createStore, combineReducers } from "redux";
import { userReducer } from "./reducer.js";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import watchFetchUsers from "./usersSaga.js";

const rootReducer = combineReducers({
    userReducer
});
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchUsers);