import React, {useState, useEffect} from "react";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { Link, Route, Router, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import HomeCard from './HomeCard';
import axios from 'axios'
const BarchaYangiliklar = () => {
  const [obyekt, setObyekt] = useState([])
 

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
// console.log('res',res)
//         setObyekt(res.data);
//     })
// }, []);


  return (
    <div>
      {obyekt && obyekt.map(item => {
                return (
                    <div style={{float: 'left', marginRight: 30}}>
        <div> <HomeCard description={item.name} date={item.zipcode}/> </div>
        </div>
                )
            }) }
      {/* <div>
            
        </div> */}

      <div>
       <Link to='/'>
       <Button variant="contained" startIcon={<SendIcon />}>
          Ortga qaytish
        </Button>
       </Link>
      </div>
    </div>
  );
};

export default BarchaYangiliklar;
