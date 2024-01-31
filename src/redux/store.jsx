import { filterReducer, taskReducer } from "./slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers, legacy_createStore as createStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  filters: filterReducer,
  tasks: taskReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store) 