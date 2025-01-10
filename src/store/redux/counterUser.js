import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "counterUser",
    initialState: JSON.parse(localStorage.getItem("akun")) || "",
    reducers: {
        editUser: (state, action) => {
            const newState = { ...state, ...action.payload };
            localStorage.setItem("akun", JSON.stringify(newState));
            return newState; 
        },
        deleteUser: () => {
            localStorage.removeItem("akun");
            return "";
        },
    },
  });

export const { editUser, deleteUser } = userSlice.actions
export default userSlice.reducer