import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Radio,
  FormControlLabel,
  FormLabel,
  Button,
} from "@mui/material";

const StudentTestPage = ({ questions, timeLimit }) => {
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill("")
  );
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    if (timeRemaining <= 0) {
      clearInterval(timerId);
      // Handle time's up, e.g., submit the answers.
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
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    // You can handle the submission of answers here, e.g., sending them to the backend.
    console.log("Selected Answers:", selectedAnswers);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div>
      <h1>Student Test</h1>
      <div style={{ marginBottom: "1rem" }}>
        <Typography variant="h6">
          Time Remaining: {formatTime(timeRemaining)}
        </Typography>
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
                  control={<Radio />}
                  label={`${option.id.toUpperCase()}. ${option.content}`}
                  checked={selectedAnswers[questionIndex] === option.id}
                  onChange={() =>
                    handleOptionChange(questionIndex, optionIndex)
                  }
                />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Answers
      </Button>
    </div>
  );
};

export default StudentTestPage;
