import React, { useState, useEffect } from "react";
import "./category.css";
import Button from "@mui/material/Button";
import CategoryTablehead from "../../components/Category/CategoryTablehead";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import CategoryTablebody from "../../components/Category/CategoryTablebody";
import CategoryAddModal from "../../components/Category/CategoryAddModal";
import CategoryEditModal from "../../components/Category/CategoryEditModal";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import requests from "../../service/category";

function Category() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openAddNewCategory, setOpenAddNewCategory] = useState(false);
  const [openEditCategory, setOpenEditCategory] = useState(false);
  const [cateName, setCateName] = useState("");
  const [cateColor, setCateColor] = useState("");
  const [id, setId] = useState(0);
  const [openEditAlert, setOpenEditAlert] = useState(false);
  const [openAddAlert, setOpenAddAlert] = useState(false);

  const handleOpenEditAlert = () => {
    setOpenEditAlert(true);
  };
  const handleCloseEditAlert = () => {
    setOpenEditAlert(false);
  };

  const hanldeOpenAddAlert = () => {
    setOpenAddAlert(true);
  };
  const handleCloseAddAlert = () => {
    setOpenAddAlert(false);
  };

  const changeCateName = (name) => {
    setCateName(name);
  };
  const changeCateColor = (color) => {
    setCateColor(color);
  };

  const changeLoading = () => {
    setLoading(!loading);
  };

  const handleOpenAddNewCategory = () => {
    setOpenAddNewCategory(true);
  };
  const handleCloseAddNewCategory = () => {
    setOpenAddNewCategory(false);
  };

  const handleOpenEditCategory = (itemId) => {
    setOpenEditCategory(true);
    if (itemId !== null) {
      requests.getOneCategory(itemId).then((result) => {
        if (result.status === 200) {
          setCateColor(result.data.color);
          setCateName(result.data.name);
          setId(itemId);
        }
      });
    }
  };
  const handleCloseEditCategory = () => {
    setOpenEditCategory(false);
  };

  useEffect(() => {
    requests
      .getAllCategory()
      .then((result) => {
        if (result.status === 200) {
          setData(result.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [loading]);

  return (
    <>
      <div className="category__top__container">
        <h1>Category</h1>
        <Button
          variant="contained"
          size="large"
          sx={{ height: "50px", marginTop: "20px" }}
          onClick={() => handleOpenAddNewCategory()}
        >
          Add New
        </Button>
      </div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <TableContainer component={Paper}>
          <Table>
            <CategoryTablehead />
            <CategoryTablebody
              data={data}
              handleOpenEditCategory={handleOpenEditCategory}
              changeLoading={changeLoading}
            />
          </Table>
        </TableContainer>
      </div>

      <CategoryAddModal
        changeLoading={changeLoading}
        open={openAddNewCategory}
        handleClose={handleCloseAddNewCategory}
        hanldeOpenAddAlert={hanldeOpenAddAlert}
      />
      <CategoryEditModal
        open={openEditCategory}
        handleClose={handleCloseEditCategory}
        name={cateName}
        color={cateColor}
        changeCateColor={changeCateColor}
        changeCateName={changeCateName}
        id={id}
        changeLoading={changeLoading}
        handleOpenEditAlert={handleOpenEditAlert}
      />

      <Snackbar
        open={openEditAlert}
        onClose={handleCloseEditAlert}
        autoHideDuration={1500}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          <h1>Category was edited successful</h1>
        </Alert>
      </Snackbar>

      <Snackbar
        open={openAddAlert}
        onClose={handleCloseAddAlert}
        autoHideDuration={1500}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          <h1>Category was Added successful</h1>
        </Alert>
      </Snackbar>
    </>
  );
}

export default Category;
