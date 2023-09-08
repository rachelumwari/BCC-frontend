import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextareaAutosize, // Import TextareaAutosize
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import "./Question.css"; // Import your custom CSS file

export default function Question() {
  const [selectedType, setSelectedType] = useState("Assignment");
  const [startingTime, setStartingTime] = useState(new Date());
  const [endingTime, setEndingTime] = useState(new Date());
  const [error, setError] = useState("");

  const question = [
    {
      type: selectedType,
      startingTime,
      endingTime,
    },
  ];

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleStartingTimeChange = (date) => {
    setStartingTime(date);
  };

  const handleEndingTimeChange = (date) => {
    setEndingTime(date);
  };

  const filteredQuestion = question;

  const handleSubmit = () => {
    if (startingTime >= endingTime) {
      setError("Ending time should be after starting time");
    } else {
      setError("");
      // Perform any other actions here
    }
  };

  return (
    <div className="centered-container">
      <div className="question-container">
        <FormControl className="">
          <InputLabel>Type</InputLabel>
          <Select value={selectedType} onChange={handleTypeChange}>
            <MenuItem value="Assignment">Assignment</MenuItem>
            <MenuItem value="Exam">Exam</MenuItem>
          </Select>
        </FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          
        </MuiPickersUtilsProvider>
        <TextareaAutosize className="textAreaContainer"
          label="Example Textarea"
          rowsMin={3}
          placeholder="Enter text here" 
        />
        
        {error && <p className="error">{error}</p>}
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <Table>
        {/* ... Table contents ... */}
      </Table>
    </div>
  );
}