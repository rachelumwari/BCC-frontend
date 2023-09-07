import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  users: [],
  userData: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    role: "",
    gender: "",
  },
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUserData: (state, action) => {
      const userDate = action.payload;
      state.userData = userDate;
    },
    addUsers: (state, action) => {
      const userDate = action.payload;
      state.users = [...state.users, userDate];
    },
    updateUsers: (state, action) => {
      const users = state.users;
      users[action.payload.index] = action.payload.body;
      state.users = users;
    },
    deleteUser: (state, action) => {
      const users = state.users;
      users.splice(action.payload, 1);
      state.users = users;
    },
  },
});

export const { updateUserData, addUsers, updateUsers, deleteUser } = userSlice.actions;

export default userSlice.reducer;
