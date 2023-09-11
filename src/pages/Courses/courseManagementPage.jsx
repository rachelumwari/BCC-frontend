import { React, useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
  Paper,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  addCourse,
  deleteCourse,
  updateCourse,
  updateCourseData,
  initialState,
  getCourseDetails,
} from "../../features/courses/courseSlice";
import Table from "../../component/Tables/Table";
import CreateQuestionPage from "../../component/Quetions/questions";
import StudentTestPage from "../../component/Quetions/displayQuesitons";
import CourseStudents from "../Students/courseStudent";
import CourseAssignments from "./courseAssigment";
import { useNavigate } from "react-router-dom";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function ManagementCourses() {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const routeParams = useParams();
  const { status, courseDetails } = useSelector((state) => state.courseDetails);

  useEffect(() => {
    if (status === "idle" || status === "done")
      dispatch(getCourseDetails(routeParams.id));
  }, [courseDetails]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}>
      <Stack direction="row">
        <IconButton disableRipple onClick={() => navigate("/courses")}>
          <ArrowBackIcon />
        </IconButton>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ padding: "15px 0px", marginBottom:"0em" }}
        >
          COURSES
        </Typography>
      </Stack>
      <Divider sx={{ marginBottom: 1 }} />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="basic tabs example"
          >
            <Tab label="Users" />
            <Tab label="Assignment" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <CourseStudents students={courseDetails.students} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <CourseAssignments
            assignments={courseDetails.assignments}
            courseId={routeParams.id}
          />
        </CustomTabPanel>
      </Box>
    </Paper>
  );
}
