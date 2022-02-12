import React from 'react'
import { Button } from "@mui/material";

import SendIcon from '@mui/icons-material/Send';
import { Link, Route, Router, Routes } from 'react-router-dom';
const Category = () => {
    return (
        <div>
            Category



            <div>
       <Link to='/'>
       <Button variant="contained" startIcon={<SendIcon />}>
          Ortga qaytish
        </Button>
       </Link>
      </div>
        </div>
    )
}

export default Category
