import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}courses/`;

export const getCourseDetails = createAsyncThunk(
  "getCourseDetails",
  async (id) => {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }
);

export const initialState = {
  courseDetails: {
    id: "",
    courseName: ""
  },
  message: "",
  status: "idle",
  error: null,
};

export const courseDetailsSlice = createSlice({
  name: "courseDetails",
  initialState,
  reducers: {
    updateStatusOpen: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add get course details data
    builder.addCase(getCourseDetails.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getCourseDetails.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.status = "succeeded";
        state.message = action.payload.message;
        state.courseDetails = action.payload.data;
      } else {
        state.status = "failed";
        state.message = action.payload.message;
      }
    });
    builder.addCase(getCourseDetails.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { updateStatusOpen} = courseDetailsSlice.actions;

export default courseDetailsSlice.reducer;
