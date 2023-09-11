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
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddCourseForm from "./addCourseForm";
import { useSelector, useDispatch } from "react-redux";

import {
  getAllCourses,
  getCoursesById,
  deleteCourseById,
  updateCourseById,
  addCourseUser,
  updateEditState,
  updateDialogOpen,
} from "../../features/courses/courseSlice";
import Table from "../../component/Tables/Table";
import PageLoader from "../../component/Loader/pageLoader";

export default function Courses() {
  const dispatch = useDispatch();
  const { courseData, status, editing, isDialogOpen } = useSelector(
    (state) => state.courses
  );
  let courses = useSelector((state) => state.courses.courses);
  courses = courses.map((course) => {
    if (course.teacher) {
      return {
        ...course,
        teacherName: `${course.teacher.firstName} ${course.teacher.lastName}`,
      };
    } else {
      return { ...course, teacherName: "-" };
    }
  });

  useEffect(() => {
    if (status === "idle" || status === "done") {
      dispatch(getAllCourses());
    }
  }, [courses]);

  const columns = [
    {
      field: "courseName",
      label: "Name",
      minWidth: 130,
      align: "left",
    },
    {
      field: "teacherName",
      label: "Teacher Name",
      minWidth: 130,
      align: "left",
    },
    {
      field: "studentCount",
      label: "Students",
      minWidth: 130,
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
    dispatch(updateEditState(false));
  };

  const handleModalOpen = () => {
    dispatch(updateDialogOpen(true));
  };

  const handleSaveUser = () => {
    dispatch(addCourseUser(courseData));
  };

  const handleCourseEdit = (e) => {
    const courseId = e.currentTarget.id;
    localStorage.setItem("courseUpdateId", courseId);
    dispatch(getCoursesById(courseId));
  };

  const handleDeleteEdit = (e) => {
    const courseId = e.currentTarget.id;
    dispatch(deleteCourseById(courseId));
  };

  const handleUpdate = () => {
    dispatch(updateCourseById(courseData));
  };
  return (
    <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}>
      <Dialog open={isDialogOpen}>
        {editing ? (
          <DialogTitle align="center">UPDATE COURSE</DialogTitle>
        ) : (
          <DialogTitle align="center">ADD NEW COURSE</DialogTitle>
        )}
        <DialogContent>
          <AddCourseForm />
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
        <IconButton>
          
        </IconButton>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ padding: "15px" }}
        >
          COURSES
        </Typography>

      </Stack>
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
                label="Fielter Course"
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
            Add course
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
            rows={courses}
            editFunction={handleCourseEdit}
            deleteFunction={handleDeleteEdit}
            linkTo="/course"
          />
        </Box>
      )}
    </Paper>
  );
}
