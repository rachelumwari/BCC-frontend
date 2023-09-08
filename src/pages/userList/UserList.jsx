import * as React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteIcon from "@material-ui/icons/Delete";
import "./userList.css";
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

export default function UserList() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const users = [{fullname:"Karake Charles", email:"charles@gmail.com", role:"Teacher"}];
  const filteredUsers = users;

  return (
    <div style={{ flex: 4, height: "auto", width: "400px", radius: "40px" }}>
      <div style={{ marginBottom: "16px" }}>
        <Button color="primary" variant="contained">
          Add User
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
            <TableCell>Full Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Actions</TableCell> {/* New column */}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.fullname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="actions-cell">
              <div className="icon-group">
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
