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
import AddCourseForm from "./addCourseForm";
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
import { useNavigate } from "react-router-dom";

export default function CourseAssignments(props) {
  const { assignments, courseId } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData, editing, isDialogOpen } = useSelector(
    (state) => state.courseDetails
  );

  const status = useSelector(getAllUsersStatus);

  const columns = [
    {
      field: "name",
      label: "Title",
      minWidth: 150,
      align: "left",
    },
    {
      field: "marks",
      label: "Total Marks",
      minWidth: 130,
      align: "left",
    },
    {
      field: "open",
      label: "Open",
      minWidth: 130,
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

  const handleAddAssigmentClick = () => {
    navigate(`/create-assignment/${courseId}`)
  };

  return (
    <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}>
      <Dialog open={isDialogOpen}>
        <DialogTitle align="center">ADD STUDENT</DialogTitle>
        <DialogContent>
          <AddCourseForm userData={userData} />
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
      <Stack direction="row">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          // sx={{ padding: "15px" }}
        >
          ASSIGNMENTS
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
          onClick={handleAddAssigmentClick}
        >
          ADD NEW ASSIGNMENT
        </Button>
      </Stack>
      <Divider sx={{ margin:"8px 0px" }} />
      
      {status === "loading" ? (
        <PageLoader open={true} />
      ) : (
        <Box>
          <Table
            columns={columns}
            rows={assignments}
            editFunction={handleUserEdit}
            deleteFunction={handleDeleteEdit}
          />
        </Box>
      )}
    </Paper>
  );
}
