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
        const res = await axios.post('users/signup', body);
        setAuthHeader(res.data.token);
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.massege)
    }
});

export const login = createAsyncThunk('auth/login', async (body, thunkAPI) => {
    console.log(body);
        try {
        const res = await axios.post('users/login', body);
        setAuthHeader(res.data.token);
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.massege)
    }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
        try {
        await axios.post('users/logout');
        clearAuthHeader();
    } catch (error) {
        thunkAPI.rejectWithValue(error.massege)
    }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    try {
        const state = thunkAPI.getState();

        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        setAuthHeader(persistedToken);
        const res = await axios.get('users/me');
        console.log(res.data);
        return res.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.massege)
    }
})