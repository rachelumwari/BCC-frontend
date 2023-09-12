import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Radio,
  FormControlLabel,
  FormLabel,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { updateAssignmentStatus } from "../../features/userAssignment/userAssignmentSlice";
import { submitAssignmentQuestionsAnswers } from "../../features/Questions/questionsSlice";
const StudentTestPage = ({ assignmentId, assignment, questions, timeLimit }) => {

  const dispatch = useDispatch()
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill("")
  );
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    if (timeRemaining <= 0) {
      clearInterval(timerId);
      handleSubmit();
    }
  }, [timeRemaining, timerId]);

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);

      setTimerId(timer);

      return () => {
        clearInterval(timer);
      };
    }
  }, [timeRemaining]);

  const handleOptionChange = (questionIndex, optionIndex) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = String.fromCharCode(97 + optionIndex);
    console.log(updatedAnswers);
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    // You can handle the submission of answers here, e.g., sending them to the backend.
    console.log("Selected Answers:", selectedAnswers);
    dispatch(updateAssignmentStatus("idle"));
    dispatch(submitAssignmentQuestionsAnswers({id:assignmentId, data:selectedAnswers}));
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <Stack direction="row">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "15px" }}
          >
            {`Assignment: ${assignment}`}
          </Typography>
          <Typography sx={{ flexGrow:1}}></Typography>
          <Typography variant="h5" color="secondary" sx={{ padding: "15px" }}>
            Time Remaining: {formatTime(timeRemaining)}
          </Typography>
        </Stack>
        <Divider sx={{ marginBottom: 1 }} />
      </div>
      {questions.map((question, questionIndex) => (
        <Card key={questionIndex} style={{ marginBottom: "1rem" }}>
          <CardContent>
            <Typography variant="h6">Question {questionIndex + 1}</Typography>
            <Typography>{question.questionContent}</Typography>
            <FormLabel component="legend">Options</FormLabel>
            <div>
              {question.options.map((option, optionIndex) => (
                <FormControlLabel
                  key={option.id}
                  value={option.id}
                  control={<Radio color="secondary" />}
                  label={`${option.id.toUpperCase()}. ${option.content}`}
                  checked={selectedAnswers[questionIndex] === option.id.toLowerCase()}
                  onChange={() =>
                    handleOptionChange(questionIndex, optionIndex)
                  }
                />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
      <Button variant="contained" color="secondary" onClick={handleSubmit}>
        Submit Answers
      </Button>
    </>
  );
};

export default StudentTestPage;
