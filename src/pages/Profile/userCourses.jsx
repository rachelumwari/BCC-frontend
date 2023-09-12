import { React, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CustomUserCoursesTable from "../../component/Tables/userCoursesTable";
import { getUserCourses } from "../../features/userCourses/userCoursesSlice";

export default function UserCourses() {
  const dispatch = useDispatch();
  const [userCourse, setUserCourses] = useState([]);
  const { courses, status } = useSelector((state) => state.userCourses);

  useEffect(() => {
    if (status === "idle") dispatch(getUserCourses());
    setUserCourses(courses);
  }, [courses, status, dispatch]);

  const columns = [
    {
      field: "course",
      label: "Course Name",
      minWidth: 130,
      align: "left",
    },
    {
      field: "marks",
      label: "Marks",
      minWidth: 100,
      align: "left",
    },
    {
      field: "status",
      label: "Status",
      minWidth: 130,
      align: "left",
    },
  ];

  return (
    <Box>
      <CustomUserCoursesTable columns={columns} rows={userCourse} />
    </Box>
  );
}
