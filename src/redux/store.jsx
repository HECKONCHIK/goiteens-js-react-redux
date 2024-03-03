import { filterReducer, taskReducer } from "./tasks/slice";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

const middleware = (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const persisteAuthReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    tasks: taskReducer,
    auth: persisteAuthReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
})

export const persistior = persistStore(store)