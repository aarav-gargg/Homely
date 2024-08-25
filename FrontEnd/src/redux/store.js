import { configureStore, combineReducers  } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
// import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";

const rootReducer = combineReducers({
    user: userReducer
})

const persistConfig = {
    key: 'root',
    storage:sessionStorage,
    version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefautltMiddleware) =>
        getDefautltMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store);