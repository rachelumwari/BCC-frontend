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
import { updateStatus } from "../../features/courses/courseStudent";

export default function Courses() {
  const userRole = localStorage.getItem("role")
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
      dispatch(updateStatus("idle"));
    }
  }, [courses, status]);

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

  const teacheColumms = columns.slice(0,2)
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
      <Stack direction="row" sx={{ marginTop: 2 }}>
        <Typography gutterBottom variant="h5" component="div">
          COURSES
        </Typography>
        <Typography
          variant="h6"
          component={"div"}
          sx={{ flexGrow: 1 }}
        ></Typography>
        {userRole === "Admin" ? (
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            color="secondary"
            onClick={handleModalOpen}
          >
            Add course
          </Button>
        ) : (
          <></>
        )}
      </Stack>
      <Divider sx={{ marginTop: 2 }} />

      {status === "loading" ? (
        <PageLoader open={true} />
      ) : (
        <Box>
          {userRole === "Admin" ? (
            <Table
              columns={columns}
              rows={courses}
              editFunction={handleCourseEdit}
              deleteFunction={handleDeleteEdit}
              linkTo="/course"
            />
          ) : (
            <Table
              columns={teacheColumms}
              rows={courses}
              editFunction={handleCourseEdit}
              deleteFunction={handleDeleteEdit}
              linkTo="/course"
            />
          )}
        </Box>
      )}
    </Paper>
  );
}
