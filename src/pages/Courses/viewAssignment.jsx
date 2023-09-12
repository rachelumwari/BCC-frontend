import { React, useEffect, useState } from "react";
import { Box, Divider, Typography, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CreateQuestionPage from "../../component/Quetions/questions";
import { getAssignmentQuestions } from "../../features/Questions/questionsSlice";
// import { useParams } from "react-router-dom";

export default function AddAssignment() {
  const [userQuestions, setQuestions] = useState([]);
  const dispatch = useDispatch();
  // const routeParams = useParams();

  const { questions, status } = useSelector(
    (state) => state.assignmentQuestions
  );

  useEffect(() => {
    if (status === "idle") dispatch(getAssignmentQuestions);
    setQuestions(questions);
  }, [questions]);


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
        <CreateQuestionPage questions={userQuestions} />
      </Box>
    </Paper>
  );
}
