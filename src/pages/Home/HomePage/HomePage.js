import React, {useState, useEffect} from 'react'
import HomeCard from './components/HomeCard'
import {getAllNews, postUser} from '../../../service/home'
import { Grid } from '@mui/material'
import HomeDrawer from './components/HomeDrawer'
const HomePage = () => {
  const [d, setD] = useState([])

  // useEffect(() => {
  //     getAllNews().then(data => {
  //      console.log(data.data);
  //     })
  // }, [])


  // useEffect(() => {
//     postUser().then(data => {
//      console.log(data.data);
//     })
// }, [])
    return (
        <div style={{backgroundColor: 'yellow', borderRadius: '70px'}}>
         <HomeDrawer />
        </div>
    )
}

export default HomePage
