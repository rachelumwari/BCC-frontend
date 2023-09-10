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

export default function CourseAssignments() {
  const dispatch = useDispatch();
  const { userData, editing, isDialogOpen } = useSelector(
    (state) => state.users
  );
  const users = useSelector(getUsers);
  const status = useSelector(getAllUsersStatus);

  useEffect(() => {
    if (status === "idle" || status === "done") dispatch(getAllUsers());
  }, [users, dispatch, status]);

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

      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ padding: "15px" }}
      >
        ASSIGNMENTS
      </Typography>
      <Divider sx={{ marginBottom: 1 }} />
      <Box height={40}>
        <Stack direction="row" spacing={2}>
          <Autocomplete
            disablePortal
            id="filter-box"
            options={[]}
            sx={{ width: 300 }}
            getOptionLabel={(users) => users.role || ""}
            renderInput={(params) => (
              <TextField
                color="info"
                {...params}
                size="small"
                label="Fielter Users By Role"
              />
            )}
          />
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
            ADD NEW ASSIGNMENT
          </Button>
        </Stack>
      </Box>
      <Divider sx={{ marginTop: 1 }} />
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