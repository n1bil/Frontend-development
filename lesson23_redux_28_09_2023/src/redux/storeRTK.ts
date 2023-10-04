import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import sandWichSlice from "./slices/sandwichSlice";
import booksSlice from "./slices/booksSlice";

export const storeRTK = configureStore({
    reducer: {
        counter: counterSlice,
        sandwich: sandWichSlice,
        books: booksSlice
    }
})

export type RootState = ReturnType<typeof storeRTK.getState>;
export type AppDispatch = typeof storeRTK.dispatch;