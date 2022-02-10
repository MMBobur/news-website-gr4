import React, { useState } from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { style } from "./modalStyle";
import DeleteIcon from "@mui/icons-material/Delete";
import requests from "../../service/user";

const Tablebody = ({ users, changeLoading, changeId }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState();
  const [openAlert, setOpenAlert] = useState(false);

  const handleAlertClose = () => {
    setOpenAlert(false);
  };

  const handleOpen = (id) => {
    setOpenDeleteModal(true);
    setDeleteUserId(id);
  };
  const handleClose = () => setOpenDeleteModal(false);

  const deleteUser = () => {
    requests.deleteUser(deleteUserId).then((result) => {
      if (result.status === 200) {
        handleClose();
        changeLoading();
        setOpenAlert(true);
      }
    });
  };

  return (
    <>
      <TableBody>
        {users.map((user, index) => (
          <TableRow
            key={index}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell>{index + 1}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.login}</TableCell>
            <TableCell>{user.password}</TableCell>
            <TableCell>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <span className="edit__icon__container">
                  <EditIcon
                    fontSize="large"
                    color="success"
                    onClick={() => changeId(user.id)}
                  />
                </span>
                <DeleteIcon
                  fontSize="large"
                  color="error"
                  onClick={() => handleOpen(user.id)}
                />
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      <Snackbar
        open={openAlert}
        autoHideDuration={1500}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleAlertClose}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          <h1>User was deleted successful</h1>
        </Alert>
      </Snackbar>

      <Modal
        open={openDeleteModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
              onClick={() => deleteUser()}
            >
              Ok
            </Button>
            <Button
              variant="contained"
              size="large"
              color="error"
              onClick={() => handleClose()}
            >
              Cansle
            </Button>
          </span>
        </Box>
      </Modal>
    </>
  );
};

export default Tablebody;

// ---------------------
