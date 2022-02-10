import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import { Link, Route, Router, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function Cardlar({ navigater, rangi, rasmi, haqida, yol }) {
  let navigate = useNavigate();
  return (
    <div>
      <Paper
        style={{ borderRadius: "20px", boxShadow: "0 0 20px #333" }}
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 500,
          flexGrow: 1,
          bgcolor: rangi,
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src={rasmi} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={8}>
              <Grid item>
                <Typography
                  style={{ marginTop: 40 }}
                  gutterBottom
                  variant="subtitle1"
                >
                  <h3> {haqida}</h3>
                </Typography>
              </Grid>
              <Grid item></Grid>
            </Grid>
            <Grid style={{ marginRight: 30 }} item>
              <Typography variant="subtitle1" component="div">
                <Link to={`/${yol}`}>
                  {" "}
                  <DriveFileMoveIcon />{" "}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      {/* <Card>
      <CardContent>
      <Typography variant="h6" component="div">
           <Link to={`${'/',yol}`}> {haqida}</Link>
        </Typography>
      </CardContent>
      
    </Card> */}
    </div>
  );
}
