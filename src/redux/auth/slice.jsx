import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./operations";

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null
        },
        token: null,
        IsLoggedIn: false,
        IsRefreshing: false,
        error: null,
    },
    extraReducers(builder) {
        builder
            .addCase(register.fulfilled, (state, action) => {
                console.log(action.payload);
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.IsLoggedIn = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.IsLoggedIn = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.token = null
                state.IsLoggedIn = false;
            })
            .addCase(refreshUser.pending, (state, action) => {
                state.IsRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.user = action.payload.user;
                state.IsLoggedIn = true;
                state.IsRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state, action) => {
                state.IsRefreshing = false;
            })
    }
})

export const authReducer = AuthSlice.reducer