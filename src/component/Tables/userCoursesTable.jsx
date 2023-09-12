import { React, useState } from "react";
import {
  TablePagination,
  TableCell,
  TableBody,
  TableHead,
  Table,
  TableContainer,
  TableRow,
} from "@mui/material";

export default function CustomUserCoursesTable(props) {
  const { columns, rows } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                  >
                    {columns.map((column) => {
                      if (column.field === "course") {
                        return (
                          <TableCell
                            key={`${column.field}-${index}`}
                            align={column.align ? column.align : "right"}
                          >
                            {String(row[column.field].courseName)}
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell
                          key={`${column.field}-${index}`}
                          align={column.align ? column.align : "right"}
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
