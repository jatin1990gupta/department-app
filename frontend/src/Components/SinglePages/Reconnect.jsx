import React from "react";
import { Link } from "react-router-dom";

import classes from "./Reconnect.module.css";

import centerImg from "../../Assets/img/Reconnect/reconnect.png";
import clgLogo from "../../Assets/img/clg-logo-dark.png";
import Button from "../UI/Button";
import { Routes } from "../../constants/routes";

const Reconnect = () => {
  return (
    <div className="reconnect">
      <Link className={classes.TopImg} to={Routes.notices}>
        <img src={clgLogo} alt="" />
      </Link>
      <div className="reconnect__center-text">
        <img src={centerImg} alt="" />
        <p className="head-first">Oops. your connection seeems off...</p>
        <p className="head-second">
          Keep calm, light a fire and press reconnect to try again
        </p>
        <Link>
          <Button width="30%">Reconnect</Button>
        </Link>
        <Link to={Routes.notices} className="head-third">
          <p>Back to Homepage</p>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Reconnect;
