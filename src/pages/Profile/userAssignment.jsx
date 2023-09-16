import { React, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CustomUserAssignmentsTable from "../../component/Tables/userAssignment";
import { getUserAssignments } from "../../features/userAssignment/userAssignmentSlice";
import { useNavigate } from "react-router-dom";
import { updateQuestionsStatus } from "../../features/Questions/questionsSlice";

export default function UserAssignments() {
  const dispatch = useDispatch();
  const [userAssignments, setUserAssignments] = useState([]);
  const { assignments, status } = useSelector((state) => state.userAssignments);
  const navigate = useNavigate()

  useEffect(() => {
    if (status === "idle") dispatch(getUserAssignments());
    setUserAssignments(assignments);
  }, [assignments, status, dispatch]);

  const columns = [
    {
      field: "courseName",
      label: "Course Name",
      minWidth: 170,
      align: "left",
    },
    {
      field: "name",
      label: "Assignment Name",
      minWidth: 170,
      align: "left",
    },
    {
      field: "userMarks",
      label: "Marks",
      minWidth: 170,
      align: "left",
    },
    {
      field: "startingTime",
      label: "Due Time",
      minWidth: 130,
      align: "left",
    },
    {
      field: "startAssignment",
      label: "Take Assignment",
      minWidth: 170,
      align: "left",
    },
  ];

  const handleStartAssignment = (e) => {
    const assignmentId = e.currentTarget.id;
    dispatch(updateQuestionsStatus("idle"));
    navigate(`/take-assigment/${assignmentId}`);
  };

  return (
    <Box>
      <CustomUserAssignmentsTable
        columns={columns}
        rows={userAssignments}
        startAssignmentFunction={handleStartAssignment}
      />
    </Box>
  );
}
