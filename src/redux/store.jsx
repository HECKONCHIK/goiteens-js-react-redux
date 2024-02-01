import { filterReducer, taskReducer } from "./slice";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    tasks: taskReducer,
  }
})