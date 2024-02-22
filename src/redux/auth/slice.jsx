import { createSlice } from "@reduxjs/toolkit";
import { register } from "./operations";

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
                state.user.name = action.payload.name;
                state.user.email = action.payload.email;
                state.token = action.payload.token;
                isLoggedIn: true;
            })
    }
})