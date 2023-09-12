import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const LOGIN_URL = `${process.env.REACT_APP_BACKEND_URL}user/login/`;

// export const loginUser = createAsyncThunk("user/login", async (data) => {
//   try {
//     console.log(data);
//     const response = await axios.post(LOGIN_URL, {
//       ...data,
//     });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.log(response.data);
//   }
// });
export const loginUser = createAsyncThunk("user/login", async (data) => {

    const response = await fetch(LOGIN_URL, {
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json",
      },
      body:JSON.stringify(data)
    });
    return response.json();
  
});


export const initialState = {
  user: null,
  message:"",
  status: "idle",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload.status===200){
          state.status = "succeeded";
          state.message = action.payload.message;
          state.user = action.payload.data;
          localStorage.setItem("role", action.payload.data.role);
          localStorage.setItem("authToken", action.payload.data.token);
          localStorage.setItem("name", `${action.payload.data.firstName} ${action.payload.data.lastName}`);
        }else{
          state.status = "failed";
          state.message = action.payload.message;
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const selectloggedinUser = (state) => state.auth.user;
export const getAuthStatus = (state) => state.auth.status;
export const getAuthError = (state) => state.auth.error;

export default authSlice.reducer;
