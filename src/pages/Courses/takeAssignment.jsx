import { React, useEffect, useState } from "react";
import { Box, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import StudentTestPage from "../../component/Quetions/displayQuesitons";
import { getAssignmentQuestions } from "../../features/Questions/questionsSlice";

export default function TakeAssignment() {
  const [userQuestions, setQuestions] = useState([]);
  const [assignmentName, setAssignmentName] = useState("");
  const dispatch = useDispatch();
  const routeParams = useParams();

  const { assignment, questions, status } = useSelector(
    (state) => state.assignmentQuestions
  );

  useEffect(() => {
    if (status === "idle") dispatch(getAssignmentQuestions(routeParams.id));
    setAssignmentName(assignment);
    setQuestions(questions);
  }, [questions, status, routeParams, dispatch]);

  return (
    <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}>
      <Box sx={{ width: "100%" }}>
        <StudentTestPage
          assignmentId={routeParams.id}
          assignment={assignmentName}
          questions={userQuestions}
          timeLimit={1200}
        />
      </Box>
    </Paper>
  );
}
