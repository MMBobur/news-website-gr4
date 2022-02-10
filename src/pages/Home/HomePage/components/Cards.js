import React from 'react';
import Cardlar from './Cardlar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
//https://ae01.alicdn.com/kf/He94f90db1fdf4599ba3c59bd4bbc8500q/Creative-geometric-pattern-decorative-wall-clock-Fashion-abstract-art-wall-decoration-clock.jpg
const Cards = () => {




  return <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={8}>
        <Grid item xs={8}>
        <Cardlar rangi='orange' yol='barchayangiliklar' rasmi='https://sklad.freeimg.ru/rsynced_images/news-3774160_1280.png' haqida='Barcha Yangiliklar'/> 
        </Grid>
        <Grid item xs={4}>
        <Cardlar yol='foydalanuvchilar' rasmi='https://cdn-icons-png.flaticon.com/512/236/236832.png'  rangi='rgb(60, 179, 113)'  haqida='Foydalanuvchilar'/> 
        </Grid>
        <Grid item xs={4}>
        <Cardlar yol='hammasi' rasmi='https://www.ird.lk/wp-content/uploads/2019/06/Newspaper-Icon-II.png ' rangi='red' haqida='Yangilik Yaratish'/>
        </Grid>
        <Grid item xs={8}>
        <Cardlar yol='category' rasmi='https://cdn-icons-png.flaticon.com/512/603/603161.png' rangi='#006699' haqida='Categoriyalar'/>
        </Grid>
      </Grid>
    </Box>
      
  </div>;
};

export default Cards;
