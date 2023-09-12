import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../features/navbar/navbarSlice";
import userSlice from "../features/users/userSlice";
import courseSlice from "../features/courses/courseSlice";
import teacherSlice from "../features/teachers/teacherSlice";
import authSlice from "../features/Auth/loginSlice";
import courseDetailsSlice from "../features/courses/courseDetailsSlice";
import assignmentSlice from "../features/Assignment/assignmentSlice";
import profileSlice from "../features/profile/profileSlice";
import userCoursesSlice from "../features/userCourses/userCoursesSlice";
import userAssignmentsSlice  from "../features/userAssignment/userAssignmentSlice";
import assignmentQuestionsSlice from "../features/Questions/questionsSlice";
export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    users: userSlice,
    courses: courseSlice,
    teachers: teacherSlice,
    auth: authSlice,
    courseDetails: courseDetailsSlice,
    assignments: assignmentSlice,
    profile: profileSlice,
    userCourses: userCoursesSlice,
    userAssignments: userAssignmentsSlice,
    assignmentQuestions: assignmentQuestionsSlice,
  },
});
