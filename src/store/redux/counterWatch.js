import { createSlice } from "@reduxjs/toolkit";

export const counterWatchSlice = createSlice({
    name: "counterWatch",
    initialState: [],
    reducers: {
        addWatch: (state, action) => [action.payload, ...state],
        removeWatch: (state, action) => state.filter((item) => item.id !== action.payload.id),
    },
})

export const { addWatch, removeWatch } = counterWatchSlice.actions

export default counterWatchSlice.reducer