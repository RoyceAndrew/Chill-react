import { configureStore } from "@reduxjs/toolkit";
import counterWatchSlice from "./counterWatch";
import userSlice from "./counterUser";

export const store = configureStore({
    reducer: {
        counterWatch: counterWatchSlice,
        counterUser: userSlice,
    },
});