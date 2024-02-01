import { statusFilters } from "./constants";
import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./operations";

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
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers(builder) {
        builder
            .addCase(fetchTasks.pending, (state, action) => {
                state.isLoading = action.payload;
            })
            .addCase(fetchTasks.fullfield, (state, action) => {
                state.isLoading = true;
                state.error = action.payload;
                state.items = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.error = action.payload;
            })
            
    }
//     reducers: {
//         addTask(state, action) {
//             state.push(action.payload)
//         },
//         deleteTask(state, action) {
//             return state.filter(task => task.id !== action.payload)
//         },
//         toggleCompeted(state, action) {
//             return state.map(task => {
//                 if (task.id !== action.payload) {
//                     return task;
//                 }
//                 return {...task, competed: !task.completed}
//             })
//         }
//    } 
})


export const { setStatusFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;

// export const { addTask, deleteTask, toggleCompeted } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;