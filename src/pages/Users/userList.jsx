import { React, useEffect } from "react";
import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  Paper,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddUserForm from "./addUserForm";
import { useSelector, useDispatch } from "react-redux";
import {
  getUsers,
  getAllUsers,
  getAllUsersStatus,
  updateEditState,
  getUserById,
  deleteUserById,
  updateUserById,
  addNewUser,
  updateDialogOpen,
} from "../../features/users/userSlice";
import Table from "../../component/Tables/Table";
import PageLoader from "../../component/Loader/pageLoader";

export default function UserList() {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const status = useSelector(getAllUsersStatus);

  const { userData, editing, isDialogOpen } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    if (status === "idle" || status === "done") dispatch(getAllUsers());
  }, [users, dispatch, status]);

  const columns = [
    {
      field: "firstName",
      label: "First Name",
      minWidth: 120,
      align: "left",
    },
    {
      field: "lastName",
      label: "Last Name",
      minWidth: 100,
      align: "left",
    },
    {
      field: "email",
      label: "Email",
      minWidth: 130,
      align: "left",
    },
    {
      field: "phoneNumber",
      label: "Phone Number",
      minWidth: 110,
      align: "left",
    },
    {
      field: "role",
      label: "Role",
      minWidth: 90,
      align: "left",
    },
    {
      field: "church",
      label: "Church",
      minWidth: 110,
      align: "left",
    },
    {
      field: "gender",
      label: "Gender",
      minWidth: 90,
      align: "left",
    },
    {
      field: "action",
      label: "Action",
      minWidth: 130,
      align: "center",
    },
  ];

  const handleClose = () => {
    dispatch(updateEditState(false));
  };

  const handleModalOpen = () => {
    dispatch(updateDialogOpen(true));
  };

  const handleSaveUser = () => {
    dispatch(addNewUser(userData));
  };

  const handleUserEdit = (e) => {
    const userId = e.currentTarget.id;
    localStorage.setItem("userUpdateId", userId);
    dispatch(getUserById(userId));
  };

  const handleDeleteEdit = (e) => {
    const userId = e.currentTarget.id;
    dispatch(deleteUserById(userId));
  };

  const handleUpdate = () => {
    dispatch(updateUserById(userData));
  };

  return (
    <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}>
      <Dialog open={isDialogOpen}>
        {editing ? (
          <DialogTitle align="center">UPDATE USER</DialogTitle>
        ) : (
          <DialogTitle align="center">ADD NEW USER</DialogTitle>
        )}
        <DialogContent>
          <AddUserForm userData={userData} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Cancel
          </Button>
          {editing ? (
            <Button onClick={handleUpdate} variant="contained" color="info">
              Update
            </Button>
          ) : (
            <Button onClick={handleSaveUser} variant="contained" color="info">
              Save
            </Button>
          )}
        </DialogActions>
      </Dialog>
      <Stack direction="row" spacing={2} sx={{ marginTop: 3 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
        >
          USERS
        </Typography>
        <Typography
          variant="h6"
          component={"div"}
          sx={{ flexGrow: 1 }}
        ></Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          color="secondary"
          onClick={handleModalOpen}
        >
          Add new user
        </Button>
      </Stack>
      <Divider sx={{ marginTop: 2 }} />
      {status === "loading" ? (
        <PageLoader open={true} />
      ) : (
        <Box>
          <Table
            columns={columns}
            rows={users}
            editFunction={handleUserEdit}
            deleteFunction={handleDeleteEdit}
          />
        </Box>
      )}
    </Paper>
  );
}
