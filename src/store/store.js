import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../features/navbar/navbarSlice";
import userSlice from "../features/users/userSlice";
import courseSlice from "../features/courses/courseSlice";
import teacherSlice from "../features/teachers/teacherSlice";
import authSlice from "../features/Auth/loginSlice";
import courseDetailsSlice from "../features/courses/courseDetailsSlice";
import assignmentSlice from "../features/Assignment/assignmentSlice";
export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    users: userSlice,
    courses: courseSlice,
    teachers: teacherSlice,
    auth: authSlice,
    courseDetails: courseDetailsSlice,
    assignments: assignmentSlice,
  },
});
