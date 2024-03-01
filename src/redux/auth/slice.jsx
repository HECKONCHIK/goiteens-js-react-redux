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
        isLoggedIn: false,
        IsRefreshing: false,
    },
    extraReducers(builder) {
        builder
            .addCase(register.fullfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(login.fullfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logout.fullfilled, (state) => {
                state.user = null;
                state.token = null
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.pending, (state, action) => {
                state.IsRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.user = action.payload.user;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state, action) => {
            
            })
    }
})

export const authReducer = AuthSlice.reducer