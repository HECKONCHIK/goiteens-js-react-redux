import { createAsyncThunk, thunkApi } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://goit-task-manager.herokuapp.com/";

const setAuthHeader = token => {
axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
axios.defaults.headers.common.Authorization = '';
};

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

export const logout = createAsyncThunk('auth/logout', async (body, thunkApi) => {
        try {
        const res = await axios('users/logout');
        clearAuthHeader();
    } catch (error) {
        thunkApi.rejectWithValue(error.massege)
    }
});

export const refreshUser = createAsyncThunk('auth/user', async (thunkApi) => {
    try {
        const state = thunkApi.getState();
        
    } catch (error) {
        thunkApi.rejectWithValue(error.massege)
    }
})