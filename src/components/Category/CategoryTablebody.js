import React, { useState } from "react";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import requests from "../../service/category";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { modalStyle } from "./modalStyle";

const CategoryTablebody = ({ handleOpenEditCategory, data, changeLoading }) => {
  const [openAlert, setOpenAlert] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [id, setId] = useState("");
  const openDelete = (itemId) => {
    setOpenDeleteModal(true);
    setId(itemId);
  };

  const handleClose = () => {
    setOpenDeleteModal(false);
  };

  const handleAlertClose = () => {
    setOpenAlert(false);
  };

  const deleteCategory = () => {
    requests
      .deleteCategory(id)
      .then((result) => {
        if (result.status === 200) {
          changeLoading();
          setOpenAlert(true);
          setOpenDeleteModal(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <TableBody>
        {data.map((item, index) => (
          <TableRow
            key={index}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              <div
                style={{
                  width: "200px",
                  height: "50px",
                  backgroundColor: `${item.color}`,
                }}
              ></div>
            </TableCell>
            <TableCell>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <span
                  className="edit__icon__container"
                  onClick={() => handleOpenEditCategory(item.id)}
                >
                  <EditIcon fontSize="large" />
                </span>
                <Button
                  variant="contained"
                  onClick={() => {
                    openDelete(item.id);
                  }}
                >
                  Delete
                </Button>
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <Modal
        open={openDeleteModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            O`chirishni hohlaysizmi?
          </Typography>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              padding: "20px 0",
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => deleteCategory()}
            >
              Ok
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => handleClose()}
            >
              Cansle
            </Button>
          </span>
        </Box>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={1500}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleAlertClose}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          <h1>Category was deleted successful</h1>
        </Alert>
      </Snackbar>
    </>
  );
};

export default CategoryTablebody;
