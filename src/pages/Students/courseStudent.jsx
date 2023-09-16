import { React, useEffect, useState } from "react";
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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PageLoader from "../../component/Loader/pageLoader";
import CustomStudentsTable from "../../component/Tables/studentsTable";
import {
  getCourseStudents,
  removeStudentCourse,
  addStudentToCourse,
  updateModelOpen,
} from "../../features/courses/courseStudent";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function CourseStudents() {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const [studentId, setStudentId] = useState("");
  const { status, students, users, modelOpen } = useSelector(
    (state) => state.courseStudents
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(getCourseStudents(routeParams.id));
    }
  }, [status, students, modelOpen]);
  
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
      align: "left",
    },
  ];

  const handleClose = () => {
    dispatch(updateModelOpen(false));
  };

  const handleModalOpen = () => {
    dispatch(updateModelOpen(true))
  };

  const handleSaveUser = () => {
    dispatch(addStudentToCourse({ id: routeParams.id, userId: studentId }));
  };

  const handleDeleteEdit = (e) => {
    const userId = e.currentTarget.id;
    dispatch(removeStudentCourse({ id: routeParams.id, userId }));
  };

  const handleUserChange = (e) => {
    const userId = e.target.value;
    setStudentId(userId);
  };

  return (
    <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}>
      <Dialog open={modelOpen}>
        <DialogTitle align="center">ADD STUDENT TO COURSE</DialogTitle>
        <DialogContent>
          <FormControl style={{ width: "100%", marginTop: "20px" }}>
            <InputLabel color="info" htmlFor="student">
              Student
            </InputLabel>
            <Select
              fullWidth
              id="student"
              onChange={handleUserChange}
              value={studentId}
              label="Student"
              color="info"
            >
              {users.map((user, index) => (
                <MenuItem value={user.id} key={index}>
                  {user.firstName + " " + user.lastName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveUser} variant="contained" color="info">
            Save
          </Button>
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
            deleteFunction={handleDeleteEdit}
          />
        </Box>
      )}
    </Paper>
  );
}
