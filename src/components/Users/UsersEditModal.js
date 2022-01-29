import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import { style } from "./modalStyle";
import requests from "../../service/user";

const UsersEditModal = ({
  id,
  username,
  login,
  password,
  changePassword,
  changeLogin,
  changeUsername,
  openEditModal,
  handleCloseEditModal,
  handleOpenEditAlert,
  changeLoading,
}) => {
  const editUser = () => {
    requests
      .updateUser({ username: username, login: login, password: password }, id)
      .then((result) => {
        if (result.status === 200) {
          changePassword("");
          changeUsername("");
          changeLogin("");
          handleCloseEditModal();
          handleOpenEditAlert();
          changeLoading();
        }
      });
  };

  const cansleEdit = () => {
    changePassword("");
    changeUsername("");
    changeLogin("");
    handleCloseEditModal();
  };
  return (
    <>
      <Modal
        open={openEditModal}
        onClose={handleCloseEditModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            align="center"
          >
            Edit user
          </Typography>
          <div>
            <Input
              fullWidth
              placeholder="Username"
              value={username}
              onChange={(event) => {
                changeUsername(event.target.value);
              }}
            />
            <Input
              fullWidth
              placeholder="Login"
              value={login}
              onChange={(event) => {
                changeLogin(event.target.value);
              }}
            />
            <Input
              fullWidth
              placeholder="Password"
              value={password}
              onChange={(event) => {
                changePassword(event.target.value);
              }}
            />
          </div>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              padding: "20px 0",
            }}
          >
            <Button variant="contained" size="large" onClick={() => editUser()}>
              Ok
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => cansleEdit()}
            >
              Cansle
            </Button>
          </span>
        </Box>
      </Modal>
    </>
  );
};

export default UsersEditModal;
