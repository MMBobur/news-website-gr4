import React from "react";

import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const CategoryTablehead = () => {
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell width="5%">T/R</TableCell>
          <TableCell width="40%">Category name</TableCell>
          <TableCell width="40%">Category color</TableCell>
          <TableCell width="15%" align="center">
            Actions
          </TableCell>
        </TableRow>
      </TableHead>
    </>
  );
};

export default CategoryTablehead;
