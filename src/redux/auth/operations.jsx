import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://goit-task-manager.herokuapp.com/";

export const register = createAsyncThunk('auth/signup', async (body) => {
    const res = await axios('users/signup', { body });
    return res.data
});

export const login = createAsyncThunk('auth/login');

export const logout = createAsyncThunk('auth/logout');