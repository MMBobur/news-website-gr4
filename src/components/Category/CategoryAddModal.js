import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import requests from "../../service/category";

import { modalStyle } from "./modalStyle";

export default function CategoryAddModal({
  open,
  handleClose,
  changeLoading,
  hanldeOpenAddAlert,
}) {
  const [cateName, setCateName] = useState("");
  const [color, setColor] = useState("");

  const createCategory = () => {
    if (cateName !== "" && color !== "") {
      requests
        .addNewCategory({ name: cateName, color: color })
        .then((result) => {
          handleClose();
          setCateName("");
          setColor("");
          changeLoading();
          hanldeOpenAddAlert();
        });
    }
  };

  const cansleAdd = () => {
    handleClose();
    setCateName("");
    setColor();
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
            Add new category
          </Typography>
          <div>
            <Input
              fullWidth
              placeholder="Category name"
              onChange={(event) => setCateName(event.target.value)}
            />
            <input
              type="color"
              style={{ marginTop: "30px" }}
              onChange={(event) => setColor(event.target.value)}
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
              onClick={() => {
                createCategory();
              }}
            >
              Ok
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                cansleAdd();
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
