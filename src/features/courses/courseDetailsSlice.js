import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}management/course/`;

export const getCourseDetails = createAsyncThunk(
  "getCourseDetails",
  async (id) => {
    console.log(BASE_URL);
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
    courseName: "",
    students: [],
    assignments: [],
  },
  isDialogOpen: false,
  editing: false,
  message: "",
  status: "idle",
  error: null,
};

export const courseDetailsSlice = createSlice({
  name: "courseDetails",
  initialState,
  reducers: {
    updateEditState: (state, action) => {
      state.editing = action.payload;
      state.isDialogOpen = action.payload;
      state.userData = initialState.userData;
    },
    updateDialogOpen: (state, action) => {
      state.isDialogOpen = action.payload;
      state.userData = initialState.userData;
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

export const { updateEditState, updateDialogOpen } = courseDetailsSlice.actions;

export default courseDetailsSlice.reducer;
