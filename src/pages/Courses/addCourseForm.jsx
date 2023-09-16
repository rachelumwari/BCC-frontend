import { React, useEffect } from "react";
import {
  TextField,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateCourseData } from "../../features/courses/courseSlice";
import { getAllTeacher } from "../../features/teachers/teacherSlice";

export default function AddCourseForm() {
  const dispatch = useDispatch();
  let courseData = useSelector((state) => state.courses.courseData);
  const teachers = useSelector((state) => state.teachers.teachers);
  const handleNameChange = (e) => {
    const courseBody = { ...courseData, courseName: e.target.value };
    dispatch(updateCourseData(courseBody));
  };
  useEffect(() => {
    dispatch(getAllTeacher());
  }, [dispatch]);
  const handleTeacherChange = (e) => {
    const teacherId = e.target.value;
    const courseBody = { ...courseData, teacher: { id: teacherId } };
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
        value={courseData.courseName}
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
          fullWidth
          labelId="course-teacher-simple-select-outlined-label"
          id="course-teacher-simple-select-outlined"
          onChange={handleTeacherChange}
          value={courseData.teacher ? courseData.teacher.id : null}
          label="Teacher"
          color="info"
        >
          {teachers.map((teacher, index) => (
            <MenuItem value={teacher.id} key={index}>
              {teacher.firstName + " " + teacher.lastName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
