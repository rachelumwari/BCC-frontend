import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openDrawer: false,
};

export const navBarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    manageDrawer: (state, action) => {
      state.openDrawer = action.payload;
    },
  },
});

export const { manageDrawer } = navBarSlice.actions;

export default navBarSlice.reducer;
