import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchRouter from "./searchSlice"
export const store = configureStore({
    reducer: {
        app: appReducer,
        search: searchRouter,
    }
})

