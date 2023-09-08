/* eslint-disable */
/* eslint-disable-next-line*/
import * as React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "./newCourse.css";
// eslint-disable-next-line

import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  IconButton,
} from "@material-ui/core";

export default function NewCourse() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const courses = [
    {
      coursesName: "Assurance of Salvation",
      status: "pending",
      createAt: "12/12/2022",
      updateAt: "1/3/2023",
    },
  ];
  const filteredCourses = courses;

  return (
    <div style={{ flex: 4, height: "auto", width: "400px", radius: "40px" }}>
      <div style={{ marginBottom: "16px" }}>
        <Button color="primary" variant="contained">
          Add Course
        </Button>
      </div>

      <TextField
        fullWidth
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search User"
        variant="outlined"
      />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>coursesName</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>CreateAt</TableCell>
            <TableCell>UpdateAt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCourses.map((courses) => (
            <TableRow key={courses.id}>
              <TableCell>{courses.coursesName}</TableCell>
              <TableCell>
                {courses.status === "pending" ? (
                  <span className="pending-label">Pending</span>
                ) : (
                  <span className="ongoing-label">Ongoing</span>
                )}
              </TableCell>
              <TableCell>{courses.createAt}</TableCell>
              <TableCell>{courses.updateAt}</TableCell>

              <TableCell className="actions-cell">
                <div className="icon-group">
                  <IconButton
                    aria-label="edit"
                    onClick={() => {
                      // Handle edit action
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="cancel"
                    onClick={() => {
                      // Handle cancel action
                    }}
                  >
                    <CancelIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      // Handle delete action
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
