import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice.js";
import createSagaMiddleware from "redux-saga";
import watchFetchUsers from "./usersSaga.js";

// const rootReducer = combineReducers({
//     userReducer
// });
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        userReducer: userReducer
    },
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchUsers);