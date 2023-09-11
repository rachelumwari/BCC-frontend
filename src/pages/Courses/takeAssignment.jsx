import { React, useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
  Paper,
  Tabs,
  Tab,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CreateQuestionPage from "../../component/Quetions/questions";
import StudentTestPage from "../../component/Quetions/displayQuesitons";

const questions = [
  {
    questionContent: "In how many days did God create the earth?",
    options: [
      { id: "a", content: "5", isCorrect: false },
      { id: "b", content: "6", isCorrect: true },
      { id: "c", content: "8", isCorrect: false },
      { id: "d", content: "7", isCorrect: false },
    ],
  },
  {
    questionContent:
      "Who received the 10 commandments from God on Mount Sinai?",
    options: [
      { id: "a", content: "Jesus", isCorrect: false },
      { id: "b", content: "David", isCorrect: false },
      { id: "c", content: "Noah", isCorrect: false },
      { id: "d", content: "Moise", isCorrect: true },
    ],
  },
  {
    questionContent: "How many books are contained within the Bible?",
    options: [
      { id: "a", content: "4", isCorrect: false },
      { id: "b", content: "66", isCorrect: true },
      { id: "c", content: "197", isCorrect: false },
      { id: "d", content: "7", isCorrect: false },
    ],
  },
];

export default function TakeAssignment() {
  return (
    <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ padding: "15px" }}
      >
        Take Assignment
      </Typography>
      <Divider sx={{ marginBottom: 1 }} />
      <Box sx={{ width: "100%" }}>
        <StudentTestPage questions={questions} timeLimit={1200} />
      </Box>
    </Paper>
  );
}
