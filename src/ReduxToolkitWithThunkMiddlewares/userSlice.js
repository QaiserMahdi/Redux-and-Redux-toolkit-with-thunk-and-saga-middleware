import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Thunk action
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
})

//User slice
export const userSlice = createSlice({
    name: "users",
    initialState: {
        loading: false,
        error: "",
        usersData: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, state => {
                state.loading = true
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.usersData = action.payload;
                state.error = "";
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.usersData = [];
                state.error = "Error while fetching data";
            })
    }
});

export const userReducer = userSlice.reducer;