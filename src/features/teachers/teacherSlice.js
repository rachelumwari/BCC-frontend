import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}user/teacher/`;

export const getAllTeacher = createAsyncThunk("getAllTeacher", async () => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response.json();
});

export const initialState = {
  teachers: [],
  message: "",
  status: "idle",
  error: null,
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
  extraReducers: (builder) => {
    builder.addCase(getAllTeacher.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAllTeacher.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.status = "succeeded";
        state.message = action.payload.message;
        state.teachers = action.payload.data;
      } else {
        state.status = "failed";
        state.message = action.payload.message;
      }
    });
    builder.addCase(getAllTeacher.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  }
});

export const { updateTeacherData, addTeacher, updateTeacher, deleteTeacher } =
  teacherSlice.actions;

export default teacherSlice.reducer;
