import { configure } from "@testing-library/react";
import { userReducer } from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        userReducer: userReducer
    }
})