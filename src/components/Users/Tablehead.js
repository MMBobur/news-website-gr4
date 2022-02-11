import React from "react";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const Tablehead = () => {
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell width="5%">T/R</TableCell>
          <TableCell width="30%">Username</TableCell>
          <TableCell width="30%">Login</TableCell>
          <TableCell width="20%">Password</TableCell>
          <TableCell width="15%" align="center">
            Actions
          </TableCell>
        </TableRow>
      </TableHead>
    </>
  );
};

export default Tablehead;
