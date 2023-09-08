import { React } from "react";
import {
  TextField,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateCourseData } from "../../features/courses/courseSlice";

export default function AddCourseForm() {
  const dispatch = useDispatch();
  const courseData = useSelector((state) => state.courses.courseData);
  const teachers = useSelector((state) => state.teachers.teachers);

  const handleNameChange = (e) => {
    const courseBody = { ...courseData, name: e.target.value };
    dispatch(updateCourseData(courseBody));
  };

  const handleTeacherChange = (e) => {
    const courseBody = { ...courseData, teacher: teachers[e.target.value] };
    dispatch(updateCourseData(courseBody));
  };

  return (
    <>
      <TextField
        autoFocus
        margin="dense"
        id="courseName"
        label="Course Name"
        type="text"
        value={courseData.name}
        onChange={handleNameChange}
        color="info"
        fullWidth
      />
      <FormControl style={{ width: "100%", marginTop: "20px" }}>
        <InputLabel
          color="info"
          htmlFor="course-teacher-simple-select-outlinedd"
        >
          Teacher
        </InputLabel>
        <Select
          labelId="course-teacher-simple-select-outlined-label"
          id="course-teacher-simple-select-outlined"
          onChange={handleTeacherChange}
          value={courseData.teacher}
          label="Teacher"
          color="info"
        >
          {teachers.map((teacher, index) => (
            <MenuItem value={index} key={index}>
              {teacher.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
