/* eslint-disable */
/* eslint-disable-next-line*/
import * as React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "./listAssignmentExam.css";
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

export default function ListAssignmentExam() {
  // const [searchTerm,setSearchTerm] = React.useState("");
  const assignmentExam = [
    {
      lesson: "Lesson 1",
      type: "Assgnment",
      status: "pending",
      startingTime: "12/12/2022",
      endingTime: "1/3/2023",
    },
  ];
  const filteredAssignmentExam = assignmentExam;

  return (
    <div style={{ flex: 4, height: "auto", width: "400px", radius: "40px", background: "secondary" }}>
      <div style={{ marginBottom: "16px" }}>
        <Button color="primary" variant="contained">
          Add
        </Button>
      </div>

      <TextField
        // fullWidth
        // onChange={(e) => setSearchTerm(e.target.value)}
        // placeholder="Search "
      //   variant="outlined"
      />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>lesson</TableCell>
            <TableCell>type</TableCell>
            <TableCell>status</TableCell>
            <TableCell>startingTime</TableCell>
            <TableCell>endingTime</TableCell>
            <TableCell>actions</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredAssignmentExam.map((assignmentExam) => (
            <TableRow key={assignmentExam.id}>
              <TableCell>{assignmentExam.lesson}</TableCell>
              <TableCell>{assignmentExam.type}</TableCell>
              <TableCell>
              {assignmentExam.status === "pending" ? (
                <span className="pending-label">Pending</span>
                ) : assignmentExam.status === "completed" ?( 
                  <span className="completed-label">Completed</span>
                  ) : (
                    <span className="ongoing-label">Ongoing</span>
                    ) 
                  }
                  </TableCell>
                  <TableCell>{assignmentExam.startingTime}</TableCell>
                  <TableCell>{assignmentExam.endingTime}</TableCell>
                  
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
