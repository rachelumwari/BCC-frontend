import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  courses: [
    {
      name: "Test Course",
      teacher: {
        id: "1",
        name: "Blaise",
      },
      students: 0,
    },
  ],
  courseData: {
    name: "",
    teacher: {
      id: "",
      name: "",
    },
    students: 0,
  },
};

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    updateCourseData: (state, action) => {
      const courseData = action.payload;
      console.log()
      state.courseData = courseData;
    },
    addCourse: (state, action) => {
      const courseDate = action.payload;
      state.courses = [...state.courses, courseDate];
    },
    updateCourse: (state, action) => {
      const courses = state.courses;
      courses[action.payload.index] = action.payload.body;
      state.courses = courses;
    },
    deleteCourse: (state, action) => {
      const courses = state.courses;
      courses.splice(action.payload, 1);
      state.courses = courses;
    },
  },
});

export const { updateCourseData, addCourse, updateCourse, deleteCourse } =
  courseSlice.actions;

export default courseSlice.reducer;
