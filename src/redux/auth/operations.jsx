import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://goit-task-manager.herokuapp.com/";

const setAuthHeader = token => {
axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/signup', async (body, thunkAPI) => {
    try {
        const res = await axios('users/signup', { body });
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.massege)
    }
});

export const login = createAsyncThunk('auth/login', async (body, thunkAPI) => {
        try {
        const res = await axios('users/login', { body });
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.massege)
    }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
        try {
        await axios('users/logout');
        clearAuthHeader();
    } catch (error) {
        thunkAPI.rejectWithValue(error.massege)
    }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {

    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    console.log(persistedToken);

    if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
        setAuthHeader(persistedToken);
        const res = await axios.get('users/me');
        console.log(res.data);
        return res.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.massege)
    }
})