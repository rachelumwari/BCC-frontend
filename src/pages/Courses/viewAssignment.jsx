import { React } from "react";
import { Box, Divider, Typography, Paper } from "@mui/material";

import CreateQuestionPage from "../../component/Quetions/questions";

export default function AddAssignment() {
  return (
    <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ padding: "15px" }}
      >
        Add Assignment
      </Typography>
      <Divider sx={{ marginBottom: 1 }} />
      <Box sx={{ width: "100%" }}>
        <CreateQuestionPage />
      </Box>
    </Paper>
  );
}
