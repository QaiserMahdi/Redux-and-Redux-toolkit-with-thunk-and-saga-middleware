import { createSlice } from "@reduxjs/toolkit";

export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";

const userSlice = createSlice({
    name: "users",
    initialState: {
        loading: false,
        users: [],
        error: ""
    },
    reducers: {
        fetchUserSuccess: (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = ""
        },
        fetchUserFailure: (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(FETCH_USER_REQUEST, (state) => {
                state.loading = true
            });
    }
});

export const { fetchUserSuccess, fetchUserFailure } = userSlice.actions;
export const userReducer = userSlice.reducer;
