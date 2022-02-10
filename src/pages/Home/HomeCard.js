import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import ButtonBase from "@mui/material/ButtonBase";

import Typography from "@mui/material/Typography";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const drawerWidth = 240;

const HomeCard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div>
      <Paper
        sx={{ p: 2, margin: "auto", maxWidth: 500 }}
        style={{
          borderRadius: "50px",
          marginBottom: "50px",
          backgroundColor: "#00cc99",
        }}
      >
        <Grid container spacing={8}>
          <Grid item sx={{ marginTop: "20px" }}>
            <ButtonBase sx={{ width: 228, height: 128 }}>
              <Img
                style={{ borderRadius: "10px" }}
                alt="complex"
                src="https://static.liveresult.ru/files/content/19/107956/ho.jpg?2515"
              />
            </ButtonBase>
          </Grid>
          <Grid item={12} sm container>
            <Grid item container direction="column" spacing={2}>
              <Grid item>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {props.description}
                </Typography>
                <Typography variant="body2" gutterBottom></Typography>
                <Typography variant="body2" color="text.secondary">
                  {props.date}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default HomeCard;
