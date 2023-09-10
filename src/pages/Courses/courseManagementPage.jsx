import { React, useState } from "react";
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
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  addCourse,
  deleteCourse,
  updateCourse,
  updateCourseData,
  initialState,
} from "../../features/courses/courseSlice";
import Table from "../../component/Tables/Table";
import CreateQuestionPage from "../../component/Quetions/questions";
import StudentTestPage from "../../component/Quetions/displayQuesitons";
import CourseStudents from "../Students/courseStudent";
import CourseAssignments from "./courseAssigment";

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const questions = [
  {
    questionContent: "What is the capital of France?",
    options: [
      { id: "a", content: "Paris", isCorrect: true },
      { id: "b", content: "London", isCorrect: false },
      { id: "c", content: "Berlin", isCorrect: false },
      { id: "d", content: "Rome", isCorrect: false },
    ],
  },
  {
    questionContent: "Which planet is known as the Red Planet?",
    options: [
      { id: "a", content: "Mars", isCorrect: true },
      { id: "b", content: "Venus", isCorrect: false },
      { id: "c", content: "Jupiter", isCorrect: false },
      { id: "d", content: "Saturn", isCorrect: false },
    ],
  },
  {
    questionContent: "What is 2 + 2?",
    options: [
      { id: "a", content: "3", isCorrect: false },
      { id: "b", content: "4", isCorrect: true },
      { id: "c", content: "5", isCorrect: false },
      { id: "d", content: "6", isCorrect: false },
    ],
  },
];

export default function ManagementCourses() {
  const [value, setValue] = useState(0);
  const routeParams = useParams();
  const dispatch = useDispatch();
  const courseData = useSelector((state) => state.courses.courseData);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ padding: "15px" }}
      >
        COURSES
      </Typography>
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
          <CourseStudents />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <CourseAssignments questions={questions} timeLimit={60} />
        </CustomTabPanel>
      </Box>
    </Paper>
  );
}
