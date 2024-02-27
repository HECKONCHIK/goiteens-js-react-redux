import { createSlice } from "@reduxjs/toolkit";
import { register, login } from "./operations";

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
    }
})

export const authReducer = AuthSlice.reducer