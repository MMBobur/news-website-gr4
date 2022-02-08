import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";

import { modalStyle } from "./modalStyle";
import requests from "../../service/category";

export default function CategoryEditModal({
  open,
  handleClose,
  name,
  color,
  changeCateName,
  changeCateColor,
  id,
  changeLoading,
  handleOpenEditAlert,
}) {
  const updateCategory = () => {
    if (name !== "" && color !== "") {
      requests
        .updateCategory({ name: name, color: color }, id)
        .then((result) => {
          if (result.status === 200) {
            changeLoading();
            handleClose();
            changeCateColor("");
            changeCateName("");
            handleOpenEditAlert();
          }
        });
    }
  };

  const cansleUpdate = () => {
    handleClose();
    changeCateName("");
    changeCateColor("");
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit category
          </Typography>
          <div>
            <Input
              fullWidth
              placeholder="Category name"
              value={name}
              onChange={(event) => changeCateName(event.target.value)}
            />
            <input
              type="color"
              style={{ marginTop: "30px" }}
              value={color}
              onChange={(event) => changeCateColor(event.target.value)}
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
              onClick={() => updateCategory()}
            >
              Ok
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                cansleUpdate();
              }}
            >
              Cansle
            </Button>
          </span>
        </Box>
      </Modal>
    </div>
  );
}
