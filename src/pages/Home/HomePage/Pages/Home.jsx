import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import HomeCard from '../components/HomeCard';
const Home = () => {
    return (
        <Grid container spacing={1}>
            <Grid item md={3}> <HomeCard description="Assalomu Aleykum, nma gap akalar qakesizlar" date='29.05.2002'/> </Grid>
            <Grid item md={3}> <HomeCard description="Qozoqlardan ibrat olmaylik akalar" date='11.2.2022'/> </Grid>
            <Grid item md={3}> <HomeCard description="Ilon MAsk dunyo boylar royhatida birinchi oringa chiqib oldi" date='29.05.2002'/> </Grid>
          </Grid>
    )
}

export default Home
