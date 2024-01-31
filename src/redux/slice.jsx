import { statusFilters } from "./constants";
import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        status: statusFilters.all,
    },
    reducers: {
        setStatusFilter(state, action) {
        state.status = action.payload
        }
    }
})

export const taskSlice = createSlice({
    name: 'task',
    initialState: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
    ],
    reducers: {
        addTask(state, action) {
            state.push(action.payload)
        },
        deleteTask(state, action) {
            return state.filter(task => task.id !== action.payload)
        },
        toggleCompeted(state, action) {
            return state.map(task => {
                if (task.id !== action.payload) {
                    return task;
                }
                return {...task, competed: !task.completed}
            })
        }
   } 
})


export const { setStatusFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;

export const { addTask, deleteTask, toggleCompeted } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;