import React from 'react';
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { Link, Route, Router, Routes } from 'react-router-dom';
const Hammasi = () => {
  return <div>
      <h1>
          Hammasi
      </h1>


      <Link to='/'>
       <Button variant="contained" startIcon={<SendIcon />}>
          Ortga qaytish
        </Button>
       </Link>
  </div>;
};

export default Hammasi;
