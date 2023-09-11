import { React} from "react";
import { Box, Divider, Typography, Paper, IconButton, Stack } from "@mui/material";

import CreateQuestionPage from "../../component/Quetions/questions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AddAssignment() {
const routeParams = useParams();
const navigate = useNavigate()
  return (
    <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}>
      <Stack direction="row">
        <IconButton
          disableRipple
          onClick={() => navigate(`/course/${routeParams.id}`)}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ padding: "15px 0px", marginBottom: "0em" }}
        >
          Add Assignment
        </Typography>
      </Stack>
      <Divider sx={{ marginBottom: 1 }} />
      <Box sx={{ width: "100%" }}>
        <CreateQuestionPage courseId={routeParams.id} />
      </Box>
    </Paper>
  );
}
