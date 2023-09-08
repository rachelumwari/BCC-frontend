import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  teachers: [
    {
      id: "1",
      name: "Blaise",
    },
    {
      id: "2",
      name: "Rachel",
    },
    {
      id: "3",
      name: "Yvan",
    },
    {
      id: "4",
      name: "Manager",
    },
  ],
};

export const teacherSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    updateTeacherData: (state, action) => {
      const userDate = action.payload;
      state.userData = userDate;
    },
    addTeacher: (state, action) => {
      const userDate = action.payload;
      state.users = [...state.users, userDate];
    },
    updateTeacher: (state, action) => {
      const users = state.users;
      users[action.payload.index] = action.payload.body;
      state.users = users;
    },
    deleteTeacher: (state, action) => {
      const users = state.users;
      users.splice(action.payload, 1);
      state.users = users;
    },
  },
});

export const { updateTeacherData, addTeacher, updateTeacher, deleteTeacher } =
  teacherSlice.actions;

export default teacherSlice.reducer;
