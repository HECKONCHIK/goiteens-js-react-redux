import { createAsyncThunk, thunkApi } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://goit-task-manager.herokuapp.com/";

export const register = createAsyncThunk('auth/signup', async (body) => {
    try {
        const res = await axios('users/signup', { body });
        return res.data
    } catch (error) {
        thunkApi.rejectWithValue(error.massege)
    }
});

export const login = createAsyncThunk('auth/login', async (body) => {
        try {
        const res = await axios('users/login', { body });
        return res.data
    } catch (error) {
        thunkApi.rejectWithValue(error.massege)
    }
});

export const logout = createAsyncThunk('auth/logout');