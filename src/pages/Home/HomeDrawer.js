import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, Route, Router, Routes } from "react-router-dom";
// import Home from "../Pages/Home";
// import Users from "../Pages/Users";
// import Category from "../Pages/Category";
import Cards from "./Cards";
// import BarchaYangiliklar from './BarchaYangiliklar'
// import Foydalanuvchilar from "./Foydalanuvchilar";
// import Hammasi from "./Hammasi";


import VpnKeyIcon from '@mui/icons-material/VpnKey';
import axios from "axios";
const drawerWidth = 240;






const HomeDrawer = (props) => {
  useEffect(() => {
    axios.get('http://localhost:5000/api/news').then((response) => {
      console.log(response.data);
    })
  }, [])
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false)
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{
          borderRadius: "70px",
          marginTop: 10,
          backgroundColor: "#00cc99",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Qovoq TV yangiliklari
          </Typography>
         <div style={{paddingLeft: 1000}}>
         <Button style={{borderRadius: '70px', marginRight: '20px'}} variant="contained" startIcon={<VpnKeyIcon />}>
            Sign Up
          </Button>
          <Button style={{borderRadius: '70px'}} variant="contained" endIcon={<LogoutIcon />}>
            Log Out
          </Button>
         </div>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        style={{ borderRadius: "20px" }}
      >
        <Toolbar />
         <Routes>
          <Route path="/" element={<Cards />} />

        </Routes> 
      </Box>
    </Box>
  );
};

export default HomeDrawer;
