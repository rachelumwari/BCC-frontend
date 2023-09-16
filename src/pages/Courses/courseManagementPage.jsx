import { React, useEffect, useState } from "react";
import {
  Box,
  Divider,
  Stack,
  Typography,
  Paper,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getCourseDetails } from "../../features/courses/courseDetailsSlice";
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
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState(
    searchParams.get("section") ? parseInt(searchParams.get("section")) : 0
  );
  const navigate = useNavigate();
  const courseName = localStorage.getItem("courseName");

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
          sx={{ padding: "15px 0px", marginBottom: "0em" }}
        >
          {`COURSE: ${courseName}`}
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
          <CourseStudents />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <CourseAssignments />
        </CustomTabPanel>
      </Box>
    </Paper>
  );
}
