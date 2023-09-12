import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}user/assignments/`;

export const getUserAssignments = createAsyncThunk(
  "getUserAssignments",
  async () => {
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
  }
);

export const initialState = {
  assignments: [],
  message: "",
  status: "idle",
  error: null,
};

export const userAssignmentsSlice = createSlice({
  name: "userAssignments",
  initialState,
  reducers: {
    updateAssignmentStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserAssignments.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getUserAssignments.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.status = "succeeded";
        state.message = action.payload.message;
        state.assignments = action.payload.data;
      } else {
        state.status = "failed";
        state.message = action.payload.message;
      }
    });
    builder.addCase(getUserAssignments.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});
export const { updateAssignmentStatus } = userAssignmentsSlice.actions
export default userAssignmentsSlice.reducer;
