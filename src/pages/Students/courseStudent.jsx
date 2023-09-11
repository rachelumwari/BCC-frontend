import { React, useEffect } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
  Paper,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddUserForm from "./addStudentForm";
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
import CustomStudentsTable from "../../component/Tables/studentsTable";

export default function CourseStudents(props) {
  const { students } = props;
  const dispatch = useDispatch();
  const { status, userData, editing, isDialogOpen } = useSelector(
    (state) => state.courseDetails
  );

  const columns = [
    {
      field: "firstName",
      label: "First Name",
      minWidth: 130,
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
        <DialogTitle align="center">ADD STUDENT</DialogTitle>
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

      <Stack direction="row" spacing={2}>
        <Typography gutterBottom variant="h5" component="div">
          STUDENTS
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
          Add new student
        </Button>
      </Stack>
      <Divider sx={{ margin: "8px 0px" }} />
      {status === "loading" ? (
        <PageLoader open={true} />
      ) : (
        <Box>
          <CustomStudentsTable
            columns={columns}
            rows={students}
            editFunction={handleUserEdit}
            deleteFunction={handleDeleteEdit}
          />
        </Box>
      )}
    </Paper>
  );
}
