import { React, useState } from "react";
import {
  Stack,
  TablePagination,
  TableCell,
  TableBody,
  TableHead,
  Table,
  TableContainer,
  TableRow,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { updateStatus } from "../../features/courses/courseStudent";
import { useDispatch } from "react-redux";
import { updateAssignmentStatus } from "../../features/courses/courseAssignment";

export default function CustomTable(props) {
  const { columns, rows, editFunction, deleteFunction, linkTo } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleLinkTo = (e) => {
    if (linkTo) {
      localStorage.setItem("courseName", e.target.innerText);
      dispatch(updateStatus("idle"));
      dispatch(updateAssignmentStatus("idle"));
      navigate(`${linkTo}/${e.currentTarget.id}`);
    } else {
      navigate(`#`);
    }
  };
  return (
    <>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align ? column.align : "right"}
                  style={{ minWidth: column.minWidth ? column.minWidth : 170 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      if (column.field === "action") {
                        return (
                          <TableCell
                            key={`${column.field}-${index}`}
                            align={column.align ? column.align : "right"}
                          >
                            <Stack spacing={2} direction="row">
                              <IconButton
                                id={row.id}
                                key={index}
                                onClick={editFunction}
                              >
                                <EditIcon color="info" />
                              </IconButton>
                              <IconButton id={row.id} onClick={deleteFunction}>
                                <DeleteIcon color="secondary" />
                              </IconButton>
                            </Stack>
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell
                          key={row.courseName}
                          align={column.align ? column.align : "right"}
                          id={row.id}
                          onClick={handleLinkTo}
                        >
                          {String(row[column.field])}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
