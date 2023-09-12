import { React, useState } from "react";
import {
  Box,
  Divider,
  Stack,
  Typography,
  Paper,
  Tabs,
  Tab,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import UserProfilePage from "./profileForm";
import UserCourses from "./userCourses";
import UserAssignments from "./userAssignment";
import { useSearchParams } from "react-router-dom";

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

export default function ProfilePage() {
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState(
    searchParams.get("section") ? parseInt(searchParams.get("section")) : 0
  );
  const name = localStorage.getItem("name");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", padding: "12px" }}>
      <Stack direction="row">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ padding: "15px 0px", marginBottom: "0em" }}
        >
          {name.toUpperCase()}
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
            <Tab label="PROFILE" />
            <Tab label="COURSES" />

            <Tab
              label={
                <Badge badgeContent={0} color="secondary">
                  ASSIGNEMENTS
                </Badge>
              }
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <UserProfilePage />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <UserCourses />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <UserAssignments />
        </CustomTabPanel>
      </Box>
    </Paper>
  );
}
