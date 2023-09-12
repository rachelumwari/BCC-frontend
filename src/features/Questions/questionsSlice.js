import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}questions/`;
const SUBMIT_BASE_URL = `${process.env.REACT_APP_BACKEND_URL}assignments/answer/`;

export const getAssignmentQuestions = createAsyncThunk(
  "getAssignmentQuestions",
  async (id) => {
    const token = localStorage.getItem("authToken");
    const response = await fetch(`${BASE_URL}${id}`, {
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

export const submitAssignmentQuestionsAnswers = createAsyncThunk(
  "submitAssignmentQuestionsAnswers",
  async (body) => {
    const {id,data} = body
    const token = localStorage.getItem("authToken");
    const response = await fetch(`${SUBMIT_BASE_URL}${id}`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answers: data,
      }),
    });
    return response.json();
  }
);

export const initialState = {
  assignment: "",
  questions: [],
  message: "",
  status: "idle",
  error: null,
};

export const assignmentQuestionsSlice = createSlice({
  name: "assignmentQuestions",
  initialState,
  reducers: {
    updateQuestionsStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAssignmentQuestions.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAssignmentQuestions.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.status = "succeeded";
        state.message = action.payload.message;
        state.assignment = action.payload.data.name;
        state.questions = action.payload.data.questions;
      } else {
        state.status = "failed";
        state.message = action.payload.message;
      }
    });
    builder.addCase(getAssignmentQuestions.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    builder.addCase(submitAssignmentQuestionsAnswers.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(
      submitAssignmentQuestionsAnswers.fulfilled,
      (state, action) => {
        if (action.payload.status === 200) {
          state.status = "succeeded";
          state.message = action.payload.message;
          window.location.href = "/profile?section=2";
        } else {
          state.status = "failed";
          state.message = action.payload.message;
        }
      }
    );

    builder.addCase(
      submitAssignmentQuestionsAnswers.rejected,
      (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      }
    );
  },
});
export const { updateQuestionsStatus } = assignmentQuestionsSlice.actions;
export default assignmentQuestionsSlice.reducer;
