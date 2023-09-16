import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}admin/dashboard/`;

export const adminDashboard = createAsyncThunk("adminDashboard", async () => {
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
  statistics: {
    totalUsers: 0,
    totalStudents: 0,
    totalTeachers: 0,
    totalMaleUsers: 0,
    totalFemaleUsers: 0,
    usersByChurch: [
      {
        church: "Restoration Church",
        userCount: "0",
      },
    ],
  },
  message: "",
  status: "idle",
  error: null,
};

export const adminSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(adminDashboard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(adminDashboard.fulfilled, (state, action) => {
        
        if (action.payload.status === 200) {
          state.status = "succeeded";
          state.message = action.payload.message;
          state.statistics = action.payload.data;
        } else {
          state.status = "failed";
          state.message = action.payload.message;
        }
      })
      .addCase(adminDashboard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});


export default adminSlice.reducer;
