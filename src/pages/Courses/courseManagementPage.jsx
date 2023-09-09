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
          <Typography>{children}</Typography>
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
            <Tab label="Assignment"/>
            <Tab label="Item Three" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </Paper>
  );
}
