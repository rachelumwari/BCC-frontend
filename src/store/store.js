import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../features/navbar/navbarSlice";
import userSlice from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    "navbar": navbarReducer,
    users: userSlice,
  },
});
