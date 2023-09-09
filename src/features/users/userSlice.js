import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const ALL_USERS_URL = `${process.env.REACT_APP_BACKEND_URL}user/`;

export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
  const response = await fetch(ALL_USERS_URL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response.json();
});

export const getUserById = createAsyncThunk("getUserById", async (id) => {
  const response = await fetch(`${ALL_USERS_URL}${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response.json();
});

export const deleteUserById = createAsyncThunk("deleteUserById", async (id) => {
  const response = await fetch(`${ALL_USERS_URL}${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response.json();
});

export const updateUserById = createAsyncThunk("updateUserById", async (data) => {
  const id = localStorage.getItem("userUpdateId");
  const response = await fetch(`${ALL_USERS_URL}${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
});

export const addNewUser = createAsyncThunk("addNewUser", async (data) => {
  const response = await fetch(`${ALL_USERS_URL}/add`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
});

export const initialState = {
  users: [],
  userData: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    role: "",
    church: "",
    gender: "",
  },
  isDialogOpen: false,
  editing: false,
  message: "",
  status: "idle",
  error: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUserData: (state, action) => {
      const userDate = action.payload;
      state.userData = userDate;
    },
    addUsers: (state, action) => {
      const userDate = action.payload;
      state.users = [...state.users, userDate];
      state.userData = initialState.userData;
    },
    updateUsers: (state, action) => {
      const users = state.users;
      users[action.payload.index] = action.payload.body;
      state.users = users;
    },
    deleteUser: (state, action) => {
      const users = state.users;
      users.splice(action.payload, 1);
      state.users = users;
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
    builder.addCase(getAllUsers.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.status = "succeeded";
        state.message = action.payload.message;
        state.users = action.payload.data;
      } else {
        state.status = "failed";
        state.message = action.payload.message;
      }
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    // Add retrieve user date reducer
    builder.addCase(getUserById.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(getUserById.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.status = "succeeded";
        state.message = action.payload.message;
        state.userData = action.payload.data;
        state.isDialogOpen = true;
        state.editing = true;
      } else {
        state.status = "failed";
        state.message = action.payload.message;
      }
    });
    builder.addCase(getUserById.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    // Add add user data reducer
    builder.addCase(addNewUser.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(addNewUser.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.status = "done";
        state.message = action.payload.message;
        state.isDialogOpen = false;
        state.userData = initialState.userData;
      } else {
        state.status = "failed";
        state.message = action.payload.message;
      }
    });
    builder.addCase(addNewUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    // Add update user data reducer
    builder.addCase(updateUserById.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(updateUserById.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.status = "done";
        state.message = action.payload.message;
        state.isDialogOpen = false;
        state.userData = initialState.userData;
      } else {
        state.status = "failed";
        state.message = action.payload.message;
      }
    });
    builder.addCase(updateUserById.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  
    // Add delete user data reducer
    builder.addCase(deleteUserById.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(deleteUserById.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.status = "done";
        state.message = action.payload.message;
      } else {
        state.status = "failed";
        state.message = action.payload.message;
      }
    });
    builder.addCase(deleteUserById.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});
export const getUsers = (state) => state.users.users;
export const getAllUsersStatus = (state) => state.users.status;
// export const getAuthError = (state) => state.auth.error;
export const {
  updateUserData,
  addUsers,
  updateUsers,
  deleteUser,
  updateEditState,
  updateDialogOpen,
} = userSlice.actions;

export default userSlice.reducer;
