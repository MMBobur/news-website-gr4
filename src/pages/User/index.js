import React, { useEffect, useState } from "react";
// mui components
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

import "./user.css";
import Tablehead from "../../components/Users/Tablehead";
import Tablebody from "../../components/Users/Tablebody";

import requests from "../../service/user";
import UsersAddModal from "../../components/Users/UsersAddModal";
import UsersEditModal from "../../components/Users/UsersEditModal";

const Index = () => {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(0);
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [openAddNewModal, setOpenAddNewModal] = useState(false);
  const [openAddNewAlert, setOpenAddNewAlert] = useState(false);

  const [openEditModal, setOpenEditModal] = useState(false);
  const [openEditAlert, setOpenEditAlert] = useState(false);
  // ==============================================
  let navigate = useNavigate();

  const changeId = (userId) => {
    requests.getOneUser(userId).then((result) => {
      setUsername(result.data.username);
      setLogin(result.data.login);
      setPassword(result.data.password);
    });
    setId(userId);
    handleOpenEditModal();
  };

  const changeUsername = (newUsername) => {
    setUsername(newUsername);
  };

  const changeLogin = (newLogin) => {
    setLogin(newLogin);
  };

  const changePassword = (newPassword) => {
    setPassword(newPassword);
  };

  // ===============================================
  const handleOpenAddNewAlert = () => {
    setOpenAddNewAlert(true);
  };
  const handleCloseAddNewAlert = () => {
    setOpenAddNewAlert(false);
  };
  // ==================================================
  const handleCloseAddNewModal = () => {
    setOpenAddNewModal(false);
  };
  const handleOpenAddNewModal = () => {
    setOpenAddNewModal(true);
  };
  // ===================================================
  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };
  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };
  // =====================================================
  const handleOpenEditAlert = () => {
    setOpenEditAlert(true);
  };
  const handleCloseEditAlert = () => {
    setOpenEditAlert(false);
  };
  // ======================================================
  const changeLoading = () => {
    setLoading(!loading);
  };

  useEffect(() => {
    requests
      .getAllUsers()
      .then((result) => {
        setUsers(result.data);
      })
      .catch((error) => console.log(error));
  }, [loading]);
  return (
    <>
      <div className="user__top__container">
        <h1>Users</h1>
       <div>
       <Button
          variant="contained"
          size="large"
          sx={{ height: "50px", marginTop: "20px", marginRight: "20px" }}
          onClick={() => handleOpenAddNewModal()}
        >
          Add New
        </Button>

        <Button
          sx={{ height: "50px", marginTop: "20px" }}
          variant="contained"
          color="success"
          onClick={() => navigate("/")}
        >
          Go to Home
        </Button>
       </div>
      </div>

      <div style={{ width: "90%", margin: "0 auto" }}>
        <TableContainer component={Paper}>
          <Table>
            <Tablehead />
            <Tablebody
              users={users}
              changeLoading={changeLoading}
              changeId={changeId}
            />
          </Table>
        </TableContainer>
      </div>
      {/* ======================================================= */}
      <UsersAddModal
        openAddNewModal={openAddNewModal}
        handleCloseAddNewModal={handleCloseAddNewModal}
        changeLoading={changeLoading}
        handleOpenAddNewAlert={handleOpenAddNewAlert}
      />
      <Snackbar
        open={openAddNewAlert}
        autoHideDuration={1500}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleCloseAddNewAlert}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          <h1>User was added successful</h1>
        </Alert>
      </Snackbar>
      {/* =========================================================== */}
      <UsersEditModal
        handleCloseEditModal={handleCloseEditModal}
        openEditModal={openEditModal}
        handleOpenEditAlert={handleOpenEditAlert}
        changePassword={changePassword}
        changeLogin={changeLogin}
        changeUsername={changeUsername}
        password={password}
        login={login}
        username={username}
        id={id}
        changeLoading={changeLoading}
      />
      <Snackbar
        open={openEditAlert}
        onClose={handleCloseEditAlert}
        autoHideDuration={1500}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          <h1>User was edited successful</h1>
        </Alert>
      </Snackbar>
    </>
  );
};

export default Index;
