import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}user/profile/`;

export const getUserProfile = createAsyncThunk("getUserProfile", async () => {
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

export const updateUserProfile = createAsyncThunk(
  "updateUserProfile",
  async (data) => {
    const token = localStorage.getItem("authToken");
    const response = await fetch(BASE_URL, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
);

export const initialState = {
  profile: {},
  message: "",
  status: "idle",
  error: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserProfile.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.status = "succeeded";
        state.message = action.payload.message;
        state.profile = action.payload.data;
      } else {
        state.status = "failed";
        state.message = action.payload.message;
      }
    });
    builder.addCase(getUserProfile.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    builder.addCase(updateUserProfile.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(updateUserProfile.fulfilled, (state, action) => {

      if (action.payload.status === 200) {
        state.status = "idle";
        state.message = action.payload.message;
        window.location.href = "/profile";
      } else {
        state.status = "failed";
        state.message = action.payload.message;
      }
    });
    builder.addCase(updateUserProfile.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default profileSlice.reducer;
