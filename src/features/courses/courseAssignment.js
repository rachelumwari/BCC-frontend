import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}management/course/assignment/`;

export const getCourseAssignments = createAsyncThunk(
  "getCourseAssignments",
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

export const addStudentToCourse = createAsyncThunk(
  "addStudentToCourse",
  async (data) => {
    const { id, userId } = data;
    const response = await fetch(`${BASE_URL}${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
      }),
    });
    return response.json();
  }
);

export const removeStudentCourse = createAsyncThunk(
  "removeStudentCourse",
  async (data) => {
    const { id, userId } = data;
    const response = await fetch(`${BASE_URL}remove/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
      }),
    });
    return response.json();
  }
);

export const initialState = {
  assignments: [],
  modelOpen: false,
  message: "",
  status: "idle",
  error: null,
};

export const courseAssignmentsSlice = createSlice({
  name: "courseAssignments",
  initialState,
  reducers: {
    updateAssignmentStatus: (state, action) => {
      state.status = action.payload;
    },
    updateModelOpen: (state, action) => {
      state.modelOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add get course details data
    builder.addCase(getCourseAssignments.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getCourseAssignments.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.status = "succeeded";
        state.message = action.payload.message;
        state.assignments = action.payload.data.assignments;
      } else {
        state.status = "failed";
        state.message = action.payload.message;
      }
    });
    builder.addCase(getCourseAssignments.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    // Add get remove user from course reducer
    builder.addCase(removeStudentCourse.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(removeStudentCourse.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.status = "idle";
        state.message = action.payload.message;
      } else {
        state.status = "failed";
        state.message = action.payload.message;
      }
    });

    builder.addCase(removeStudentCourse.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    // Add get Add user to course reducer
    builder.addCase(addStudentToCourse.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(addStudentToCourse.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.status = "idle";
        state.modelOpen = false;
        state.message = action.payload.message;
      } else {
        state.status = "failed";
        state.message = action.payload.message;
      }
    });

    builder.addCase(addStudentToCourse.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { updateAssignmentStatus, updateModelOpen } = courseAssignmentsSlice.actions;

export default courseAssignmentsSlice.reducer;
