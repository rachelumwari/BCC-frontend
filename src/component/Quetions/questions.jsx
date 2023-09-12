import React, { useState } from "react";
import {
  TextField,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Button,
  InputLabel,
} from "@mui/material";
import { creatAssignment } from "../../features/Assignment/assignmentSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateQuestionPage = (props) => {
  const { courseId } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [startingTime, setStartTime] = useState("");
  const [questions, setQuestions] = useState([
    {
      questionContent: "",
      options: [
        { id: "a", content: "" },
        { id: "b", content: "" },
      ],
      correctAnswer: "",
    },
  ]);

  const handleAssignmentTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };
  const handleAddOption = (questionIndex) => {
    if (questions[questionIndex].options.length < 4) {
      const updatedQuestions = [...questions];
      updatedQuestions[questionIndex].options.push({
        id: String.fromCharCode(
          97 + updatedQuestions[questionIndex].options.length
        ),
        content: "",
        isCorrect: false,
      });
      setQuestions(updatedQuestions);
    }
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex].content = value;
    setQuestions(updatedQuestions);
  };

  const handleCorrectAnswerChange = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    const answer = updatedQuestions[questionIndex].options[optionIndex].id;
    updatedQuestions[questionIndex].correctAnswer = answer;
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      questionContent: "",
      options: [
        { id: "a", content: "" },
        { id: "b", content: "" },
      ],
      correctAnswer: "",
    };

    setQuestions([...questions, newQuestion]);
  };

  const handleQuestionContentChange = (questionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].questionContent = value;
    setQuestions(updatedQuestions);
  };

  const handleSaveAssignmentData = () => {
    const requestBody = {
      courseId: courseId,
      name: title,
      marks: questions.length,
      startingTime,
      questions,
    };
    console.log(requestBody);
    dispatch(creatAssignment(requestBody));
    // navigate(`/course/${courseId}`);
  };

  return (
    <div>
      {/* <h1>Create Multiple Choice Questions</h1> */}
      <form>
        <TextField
          required
          label="Assignment Title"
          variant="outlined"
          color="info"
          value={title}
          onChange={handleAssignmentTitleChange}
          sx={{ width: "620px" }}
          margin="normal"
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          required
          label="Assignment Date"
          variant="outlined"
          name="start-time"
          color="info"
          value={startingTime}
          type="datetime-local"
          sx={{ marginLeft: "60px" }}
          onChange={handleStartTimeChange}
          margin="normal"
        />
        {questions.map((question, questionIndex) => (
          <div key={questionIndex}>
            <TextField
              required
              label={`Question ${questionIndex + 1}`}
              variant="outlined"
              fullWidth
              color="info"
              value={question.questionContent}
              onChange={(e) =>
                handleQuestionContentChange(questionIndex, e.target.value)
              }
              margin="normal"
            />
            <FormControl component="fieldset">
              <FormLabel component="legend">Options</FormLabel>
              <RadioGroup>
                {question.options.map((option, optionIndex) => (
                  <FormControlLabel
                    key={option.id}
                    value={option.content}
                    control={
                      <Radio
                        checked={option.isCorrect}
                        onChange={() =>
                          handleCorrectAnswerChange(questionIndex, optionIndex)
                        }
                        color="info"
                      />
                    }
                    label={
                      <TextField
                        variant="outlined"
                        fullWidth
                        color="info"
                        value={option.content}
                        onChange={(e) =>
                          handleOptionChange(
                            questionIndex,
                            optionIndex,
                            e.target.value
                          )
                        }
                        margin="normal"
                      />
                    }
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <Button
              variant="contained"
              // color="primary"
              color="secondary"
              onClick={() => handleAddOption(questionIndex)}
              style={{ marginTop: "1rem" }}
            >
              Add Option
            </Button>
          </div>
        ))}
        <Button
          variant="contained"
          color="secondary"
          onClick={handleAddQuestion}
          style={{ marginTop: "1rem" }}
        >
          Add Question
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleSaveAssignmentData}
          style={{ display: "block", marginTop: "3rem" }}
        >
          Save Assignment
        </Button>
      </form>
    </div>
  );
};

export default CreateQuestionPage;
