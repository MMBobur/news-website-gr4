import React from "react";
import "./not-match.css";
import startsImg from "../../assets/images/stars.png";
import manImg from "../../assets/images/404.png";
import bottom_center from "../../assets/images/bottom_center.png";
import bottom_right from "../../assets/images/bottom_right.png";
import midle_left from "../../assets/images/midle_left.png";
import top_left from "../../assets/images/top_left.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function NoMatch() {
  const navigate = useNavigate();
  return (
    <div className="not__match__container">
      <img src={startsImg} alt="" className="starts__img" />
      <img src={top_left} alt="" className="top__left__img" />
      <img src={manImg} alt="" className="man__img" />
      <img src={midle_left} alt="" className="midle__left__img" />
      <img src={bottom_center} alt="" className="bottom__center__img" />
      <img src={bottom_right} alt="" className="bottom__right__img" />
      <h1>OOOPS!</h1>
      <p>PAGE NOT FOUND</p>
      <Button onClick={() => navigate("/")}>GO HOME</Button>
    </div>
  );
}

export default NoMatch;
