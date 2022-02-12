import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import { style } from "./modalStyle";
import requests from "../../service/user";

const UsersAddModal = ({
  handleCloseAddNewModal,
  openAddNewModal,
  changeLoading,
  handleOpenAddNewAlert,
}) => {
  const [username, setUsername] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const addNewUser = () => {
    requests
      .addNewUser({ username: username, login: login, password: password })
      .then((result) => {
        changeLoading();
        handleCloseAddNewModal();
        handleOpenAddNewAlert();
        setUsername("");
        setLogin("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const cansleAdd = () => {
    handleCloseAddNewModal();
    setUsername("");
    setLogin("");
    setPassword("");
  };
  return (
    <>
      <Modal
        open={openAddNewModal}
        onClose={handleCloseAddNewModal}
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
            Add new user
          </Typography>
          <div>
            <Input
              fullWidth
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <Input
              fullWidth
              placeholder="Login"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
            />
            <Input
              fullWidth
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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
            <Button
              variant="contained"
              size="large"
              onClick={() => addNewUser()}
            >
              Ok
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => cansleAdd()}
            >
              Cansle
            </Button>
          </span>
        </Box>
      </Modal>
    </>
  );
};

export default UsersAddModal;
