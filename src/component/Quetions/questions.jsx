// import React, { useState } from "react";
// import {
//   Button,
//   TextField,
//   FormControl,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormLabel,
// } from "@mui/material";

// const CreateQuestionPage = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestion, setCurrentQuestion] = useState("");
//   const [options, setOptions] = useState(["", ""]);
//   const [correctAnswer, setCorrectAnswer] = useState("");

//   const handleAddQuestion = () => {
//     if (
//       currentQuestion &&
//       options.every((option) => option !== "") &&
//       correctAnswer !== ""
//     ) {
//       setQuestions([
//         ...questions,
//         {
//           question: currentQuestion,
//           options: options,
//           correctAnswer: correctAnswer,
//         },
//       ]);

//       setCurrentQuestion("");
//       setOptions(["", ""]);
//       setCorrectAnswer("");
//     }
//   };

//   const handleAddOption = () => {
//     if (options.length < 4) {
//       setOptions([...options, ""]);
//     }
//   };

//   const handleOptionChange = (index, value) => {
//     const updatedOptions = [...options];
//     updatedOptions[index] = value;
//     setOptions(updatedOptions);
//   };

//   return (
//     <div>
//       <h1>Create Multiple Choice Questions</h1>
//       <div>
//         <TextField
//           label="Question"
//           variant="outlined"
//           fullWidth
//           value={currentQuestion}
//           onChange={(e) => setCurrentQuestion(e.target.value)}
//           margin="normal"
//         />
//         <FormControl component="fieldset">
//           <FormLabel component="legend">Options</FormLabel>
//           <RadioGroup>
//             {options.map((option, index) => (
//               <FormControlLabel
//                 key={index}
//                 value={option}
//                 control={<Radio />}
//                 label={
//                   <TextField
//                     variant="outlined"
//                     fullWidth
//                     value={option}
//                     onChange={(e) => handleOptionChange(index, e.target.value)}
//                     margin="normal"
//                   />
//                 }
//               />
//             ))}
//           </RadioGroup>
//         </FormControl>
//         <TextField
//           label="Correct Answer"
//           variant="outlined"
//           fullWidth
//           value={correctAnswer}
//           onChange={(e) => setCorrectAnswer(e.target.value)}
//           margin="normal"
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleAddOption}
//           style={{ marginTop: "1rem" }}
//         >
//           Add Option
//         </Button>
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={handleAddQuestion}
//           style={{ marginTop: "1rem" }}
//         >
//           Add Question
//         </Button>
//       </div>
//       <div>
//         {questions.map((question, index) => (
//           <div key={index}>
//             <h3>Question {index + 1}</h3>
//             <p>{question.question}</p>
//             <ul>
//               {question.options.map((option, i) => (
//                 <li key={i}>{option}</li>
//               ))}
//             </ul>
//             <p>Correct Answer: {question.correctAnswer}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CreateQuestionPage;


// import React, { useState } from "react";
// import {
//   TextField,
//   FormControl,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormLabel,
//   Button,
// } from "@mui/material";

// const CreateQuestionPage = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestion, setCurrentQuestion] = useState("");
//   const [options, setOptions] = useState(["", ""]);
//   const [correctAnswer, setCorrectAnswer] = useState("");

//   const handleAddOption = () => {
//     if (options.length < 4) {
//       setOptions([...options, ""]);
//     }
//   };

//   const handleOptionChange = (index, value) => {
//     const updatedOptions = [...options];
//     updatedOptions[index] = value;
//     setOptions(updatedOptions);
//   };

//   const handleCorrectAnswerChange = (value) => {
//     setCorrectAnswer(value);

//     if (
//       currentQuestion &&
//       options.every((option) => option !== "") &&
//       value !== ""
//     ) {
//       const newQuestion = {
//         question: currentQuestion,
//         options: options,
//         correctAnswer: value,
//       };

//       setQuestions([...questions, newQuestion]);
//       setCurrentQuestion("");
//       setOptions(["", ""]);
//       setCorrectAnswer("");
//     }
//   };

//   return (
//     <div>
//       <h1>Create Multiple Choice Questions</h1>
//       <div>
//         <TextField
//           label="Question"
//           variant="outlined"
//           fullWidth
//           value={currentQuestion}
//           onChange={(e) => setCurrentQuestion(e.target.value)}
//           margin="normal"
//         />
//         <FormControl component="fieldset">
//           <FormLabel component="legend">Options</FormLabel>
//           <RadioGroup>
//             {options.map((option, index) => (
//               <FormControlLabel
//                 key={index}
//                 value={option}
//                 control={<Radio />}
//                 label={
//                   <TextField
//                     variant="outlined"
//                     fullWidth
//                     value={option}
//                     onChange={(e) => handleOptionChange(index, e.target.value)}
//                     margin="normal"
//                   />
//                 }
//               />
//             ))}
//           </RadioGroup>
//         </FormControl>
//         <TextField
//           label="Correct Answer"
//           variant="outlined"
//           fullWidth
//           value={correctAnswer}
//           onChange={(e) => handleCorrectAnswerChange(e.target.value)}
//           margin="normal"
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleAddOption}
//           style={{ marginTop: "1rem" }}
//         >
//           Add Option
//         </Button>
//       </div>
//       <div>
//         {questions.map((question, index) => (
//           <div key={index}>
//             <h3>Question {index + 1}</h3>
//             <p>{question.question}</p>
//             <ul>
//               {question.options.map((option, i) => (
//                 <li key={i}>{option}</li>
//               ))}
//             </ul>
//             <p>Correct Answer: {question.correctAnswer}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CreateQuestionPage;



// import React, { useState } from "react";
// import {
//   Button,
//   TextField,
//   FormControl,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormLabel,
// } from "@mui/material";

// const CreateQuestionPage = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestion, setCurrentQuestion] = useState("");
//   const [options, setOptions] = useState(["", ""]);
//   const [correctAnswer, setCorrectAnswer] = useState("");

//   const handleAddQuestion = () => {
//     if (
//       currentQuestion &&
//       options.every((option) => option !== "") &&
//       correctAnswer !== ""
//     ) {
//       const newQuestion = {
//         question: currentQuestion,
//         options: options,
//         correctAnswer: correctAnswer,
//       };

//       setQuestions([...questions, newQuestion]);
//       setCurrentQuestion("");
//       setOptions(["", ""]);
//       setCorrectAnswer("");
//     }
//   };

//   const handleAddOption = () => {
//     if (options.length < 4) {
//       setOptions([...options, ""]);
//     }
//   };

//   const handleOptionChange = (index, value) => {
//     const updatedOptions = [...options];
//     updatedOptions[index] = value;
//     setOptions(updatedOptions);
//   };

//   return (
//     <div>
//       <h1>Create Multiple Choice Questions</h1>
//       <div>
//         <TextField
//           label="Question"
//           variant="outlined"
//           fullWidth
//           color="info"
//           value={currentQuestion}
//           onChange={(e) => setCurrentQuestion(e.target.value)}
//           margin="normal"
//         />
//         <FormControl component="fieldset">
//           <FormLabel component="legend">Options</FormLabel>
//           <RadioGroup>
//             {options.map((option, index) => (
//               <FormControlLabel
//                 key={index}
//                 value={option}
//                 control={<Radio />}
//                 color="info"
//                 label={
//                   <TextField
//                     variant="outlined"
//                     fullWidth
//                     value={option}
//                     onChange={(e) => handleOptionChange(index, e.target.value)}
//                     margin="normal"
//                     color="info"
//                   />
//                 }
//               />
//             ))}
//           </RadioGroup>
//         </FormControl>
//         <TextField
//           label="Correct Answer"
//           variant="outlined"
//           fullWidth
//           value={correctAnswer}
//           onChange={(e) => setCorrectAnswer(e.target.value)}
//           margin="normal"
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleAddOption}
//           style={{ marginTop: "1rem" }}
//         >
//           Add Option
//         </Button>
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={handleAddQuestion}
//           style={{ marginTop: "1rem" }}
//         >
//           Add Question
//         </Button>
//       </div>
//       <div>
//         {questions.map((question, index) => (
//           <div key={index}>
//             <h3>Question {index + 1}</h3>
//             <p>{question.question}</p>
//             <ul>
//               {question.options.map((option, i) => (
//                 <li key={i}>{option}</li>
//               ))}
//             </ul>
//             <p>Correct Answer: {question.correctAnswer}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CreateQuestionPage;



// import React, { useState } from "react";
// import {
//   TextField,
//   FormControl,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormLabel,
//   Button,
// } from "@mui/material";

// const CreateQuestionPage = () => {
//   const [questions, setQuestions] = useState([
//     {
//       questionContent: "",
//       options: [
//         { id: "a", content: "" },
//         { id: "b", content: "" },
//       ],
//     },
//   ]);

//   const handleAddOption = (questionIndex) => {
//     if (questions[questionIndex].options.length < 4) {
//       const updatedQuestions = [...questions];
//       updatedQuestions[questionIndex].options.push({
//         id: String.fromCharCode(
//           97 + updatedQuestions[questionIndex].options.length
//         ),
//         content: "",
//       });
//       setQuestions(updatedQuestions);
//     }
//   };

//   const handleOptionChange = (questionIndex, optionIndex, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[questionIndex].options[optionIndex].content = value;
//     setQuestions(updatedQuestions);
//   };

//   const handleAddQuestion = () => {
//     const newQuestion = {
//       questionContent: "",
//       options: [
//         { id: "a", content: "" },
//         { id: "b", content: "" },
//       ],
//     };

//     setQuestions([...questions, newQuestion]);
//   };

//   const handleQuestionContentChange = (questionIndex, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[questionIndex].questionContent = value;
//     setQuestions(updatedQuestions);
//   };

//   return (
//     <div>
//       <h1>Create Multiple Choice Questions</h1>
//       {questions.map((question, questionIndex) => (
//         <div key={questionIndex}>
//           <TextField
//             label={`Question ${questionIndex + 1}`}
//             variant="outlined"
//             fullWidth
//             value={question.questionContent}
//             onChange={(e) =>
//               handleQuestionContentChange(questionIndex, e.target.value)
//             }
//             margin="normal"
//           />
//           <FormControl component="fieldset">
//             <FormLabel component="legend">Options</FormLabel>
//             <RadioGroup>
//               {question.options.map((option, optionIndex) => (
//                 <FormControlLabel
//                   key={option.id}
//                   value={option.content}
//                   control={<Radio />}
//                   label={
//                     <TextField
//                       variant="outlined"
//                       fullWidth
//                       value={option.content}
//                       onChange={(e) =>
//                         handleOptionChange(
//                           questionIndex,
//                           optionIndex,
//                           e.target.value
//                         )
//                       }
//                       margin="normal"
//                     />
//                   }
//                 />
//               ))}
//             </RadioGroup>
//           </FormControl>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleAddOption(questionIndex)}
//             style={{ marginTop: "1rem" }}
//           >
//             Add Option
//           </Button>
//         </div>
//       ))}
//       <Button
//         variant="contained"
//         color="secondary"
//         onClick={handleAddQuestion}
//         style={{ marginTop: "1rem" }}
//       >
//         Add Question
//       </Button>
//       <div>
//         <h2>Questions JSON:</h2>
//         <pre>{JSON.stringify(questions, null, 2)}</pre>
//       </div>
//     </div>
//   );
// };

// export default CreateQuestionPage;


import React, { useState } from "react";
import {
  TextField,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Button,
} from "@mui/material";

const CreateQuestionPage = () => {
  const [questions, setQuestions] = useState([
    {
      questionContent: "",
      assignemtExamId: 3,
      options: [
        { id: "a", content: "", isCorrect: false },
        { id: "b", content: "", isCorrect: false },
      ],
    },
  ]);

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
    updatedQuestions[questionIndex].options.forEach((option, idx) => {
      option.isCorrect = idx === optionIndex;
    });
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      questionContent: "",
      assignemtExamId: 3,
      options: [
        { id: "a", content: "", isCorrect: false },
        { id: "b", content: "", isCorrect: false },
      ],
    };

    setQuestions([...questions, newQuestion]);
  };

  const handleQuestionContentChange = (questionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].questionContent = value;
    setQuestions(updatedQuestions);
  };

  return (
    <div>
      <h1>Create Multiple Choice Questions</h1>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <TextField
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
      {/* <div>
        <h2>Questions JSON:</h2>
        <pre>{JSON.stringify(questions, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default CreateQuestionPage;
