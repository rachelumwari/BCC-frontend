import { React, useEffect, useState } from "react";
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

import { useSelector, useDispatch } from "react-redux";


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
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}>
      <Stack direction="row">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ padding: "15px 0px", marginBottom: "0em" }}
        >
          NIYONKURU BLAISE
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
                <Badge badgeContent={1} color="secondary">
                  ASSIGNEMENTS
                </Badge>
              }
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          PORFILE
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          COURSES
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          ASSIGNEMENTS
        </CustomTabPanel>
      </Box>
    </Paper>
  );
}
