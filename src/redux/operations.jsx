import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://65bbb57e52189914b5bce8bb.mockapi.io/';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (_, thunkAPI) => {
    try {
        const res = await axios.get('/tasks')
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue('Упс, помилка(')
    }
})