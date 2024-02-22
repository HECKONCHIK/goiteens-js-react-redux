import { statusFilters } from "./constants";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchTasks, toggleCompleted, deleteTasks } from "./operations";

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
            
            // ADDTASK
            .addCase(fetchTasks.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.error = action.payload;
            })


            // DELETETASK
            .addCase(deleteTasks.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteTasks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const idx = state.items.findIndex((item) => item.id !== action.payload.id)
                state.items.splice(idx, 1)
            })
            .addCase(deleteTasks.rejected, (state, action) => {
                state.error = action.payload;
            })
        
        
            // TOGGLECOMPLETED
            .addCase(toggleCompleted.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(toggleCompleted.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const idx = state.items.findIndex((item) => item.id !== action.payload.id)
                state.items.splice(idx, 1, action.payload)
            })
            .addCase(toggleCompleted.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addMatcher(isAnyOf(fetchTasks.pending, deleteTasks.pending, toggleCompleted.pending), (state) => {
                state.isLoading = true;
            })
            .addMatcher(isAnyOf(fetchTasks.rejected, deleteTasks.rejected, toggleCompleted.rejected), (state, action) => {
                state.error = action.payload;
            })
            .addMatcher(isAnyOf(fetchTasks.fulfilled, deleteTasks.fulfilled, toggleCompleted.fulfilled), (state, action) => {
                state.isLoading = false;
                state.error = null;
            })
        
            
    }
})


export const { setStatusFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;

export const taskReducer = taskSlice.reducer;