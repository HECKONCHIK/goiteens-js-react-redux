import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = 'https://65bbb57e52189914b5bce8bb.mockapi.io/';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (_, thunkAPI) => {
    try {
        const res = await axios.post('/tasks')
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue('Упс, помилка(')
    }
})

export const addTasks = createAsyncThunk('tasks/addTasks', async (text, thunkAPI) => {
    try {
        const res = await axios.post(`/tasks`);
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue('Якось іншим разом добавиш)')
    }
})

export const deleteTasks = createAsyncThunk('tasks/deleteTasks', async (task, thunkAPI) => {
    try {
        const res = await axios.delete(`tasks/${task.id}`)
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue('Ех... невезуха')
    }
})

export const toggleCompleted = createAsyncThunk('tasks/toggleTasks', async (task, thunkAPI) => {
    try {
        const res = await axios.put(`tasks/${task.id}`, {
            completed: !task.completed,
        })
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue('Ех... невезуха')
    }
})