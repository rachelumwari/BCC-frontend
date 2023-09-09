import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}courses/`;

export const getAllCourses = createAsyncThunk("getAllCourses", async () => {
  const response = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response.json();
});

export const getCoursesById = createAsyncThunk("getCoursesById", async (id) => {
  const response = await fetch(`${BASE_URL}${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response.json();
});

export const deleteCourseById = createAsyncThunk(
  "deleteCourseById",
  async (id) => {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }
);

export const updateCourseById = createAsyncThunk(
  "updateCourseById",
  async (data) => {
    const id = localStorage.getItem("courseUpdateId");
    const response = await fetch(`${BASE_URL}${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        courseName: data.courseName,
        userId: data.teacher?data.teacher.id:null,
      }),
    });
    return response.json();
  }
);

export const addCourseUser = createAsyncThunk("addCourseUser", async (data) => {
  const response = await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      courseName: data.courseName,
      userId: data.teacher ? data.teacher.id : null,
    }),
  });
  return response.json();
});
export const initialState = {
  courses: [],
  courseData: {
    id: "",
    courseName: "",
    teacher: {
      id: "",
      firstName: "",
      lastName: "",
    },
    studentCount: 0,
  },
  courseDetails:{
    id:"",
    courseName:"",
    students:[],
    assignments:[]
  },
  isDialogOpen: false,
  editing: false,
  message: "",
  status: "idle",
  error: null,
};

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    updateCourseData: (state, action) => {
      const courseData = action.payload;
      console.log();
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
    updateEditState: (state, action) => {
      state.editing = action.payload;
      state.isDialogOpen = action.payload;
      state.userData = initialState.userData;
    },
    updateDialogOpen: (state, action) => {
      state.isDialogOpen = action.payload;
      state.userData = initialState.userData;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCourses.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.status = "succeeded";
        state.message = action.payload.message;
        state.courses = action.payload.data;
      } else {
        state.status = "failed";
        state.message = action.payload.message;
      }
    });
    builder.addCase(getAllCourses.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    // Retrieve one course
    builder.addCase(getCoursesById.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(getCoursesById.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.status = "succeeded";
        state.message = action.payload.message;
        state.courseData = action.payload.data;
        state.isDialogOpen = true;
        state.editing = true;
      } else {
        state.status = "failed";
        state.message = action.payload.message;
      }
    });
    builder.addCase(getCoursesById.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    // Add add user data reducer
    builder.addCase(addCourseUser.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(addCourseUser.fulfilled, (state, action) => {
      if (action.payload.status === 201) {
        state.status = "done";
        state.message = action.payload.message;
        state.isDialogOpen = false;
        state.courseName = initialState.courseName;
      } else {
        state.status = "failed";
        state.message = action.payload.message;
      }
    });
    builder.addCase(addCourseUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    // Add update user data reducer
    builder.addCase(updateCourseById.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(updateCourseById.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.status = "done";
        state.message = action.payload.message;
        state.isDialogOpen = false;
        state.courseName = initialState.courseName;
      } else {
        state.status = "failed";
        state.message = action.payload.message;
      }
    });
    builder.addCase(updateCourseById.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    // Add delete user data reducer
    builder.addCase(deleteCourseById.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(deleteCourseById.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.status = "done";
        state.message = action.payload.message;
      } else {
        state.status = "failed";
        state.message = action.payload.message;
      }
    });
    builder.addCase(deleteCourseById.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const {
  updateCourseData,
  addCourse,
  updateCourse,
  deleteCourse,
  updateEditState,
  updateDialogOpen,
} = courseSlice.actions;

export default courseSlice.reducer;
