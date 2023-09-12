import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}user/courses/`;

export const getUserCourses = createAsyncThunk("getUserCourses", async () => {
  const token = localStorage.getItem("authToken");
  const response = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response.json();
});

export const initialState = {
  courses: [],
  message: "",
  status: "idle",
  error: null,
};

export const userCoursesSlice = createSlice({
  name: "userCourses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserCourses.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getUserCourses.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.status = "succeeded";
        state.message = action.payload.message;
        state.courses = action.payload.data;
      } else {
        state.status = "failed";
        state.message = action.payload.message;
      }
    });
    builder.addCase(getUserCourses.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default userCoursesSlice.reducer;
