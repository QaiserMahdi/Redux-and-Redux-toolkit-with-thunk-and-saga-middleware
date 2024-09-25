import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state, action) => { state.count = state.count + action.payload },
        decrement: (state) => { state.count -= 1 }
    }
});

export const { increment, decrement } = counterSlice.actions;

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});