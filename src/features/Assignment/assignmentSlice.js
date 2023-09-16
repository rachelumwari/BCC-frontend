import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}assignments/`;

export const creatAssignment = createAsyncThunk(
  "creatAssignment",
  async (data) => {
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
);

export const initialState = {
  assignment: "",
  isDialogOpen: false,
  editing: false,
  message: "",
  status: "idle",
  error: null,
};

export const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    updateEditState: (state, action) => {
      state.editing = action.payload;
      state.isDialogOpen = action.payload;
    },
    updateDialogOpen: (state, action) => {
      state.isDialogOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add get course details data
    builder.addCase(creatAssignment.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(creatAssignment.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload.status === 201) {
        state.status = "succeeded";
        state.message = action.payload.message;
        const courseId = localStorage.getItem("courseAssignmentId")
        localStorage.removeItem("courseAssignmentId");
        window.location.href = `/course/${courseId}?section=1`;
      } else {
        state.status = "failed";
        state.message = action.payload.message;
      }
    });
    builder.addCase(creatAssignment.rejected, (state, action) => {
      console.log("error");
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { updateEditState, updateDialogOpen } = assignmentSlice.actions;

export default assignmentSlice.reducer;
