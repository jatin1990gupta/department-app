import React from "react";
import { Link } from "react-router-dom";

import classes from "./ServerDownPage.module.css";

import centerImg from "../../Assets/img/ServerDown/serverD.png";
import clgLogo from "./../Assets/img/clg-logo-dark.png";
import Button from "../UI/Button";
import { Routes } from "../../constants/routes";

const ServerDownPage = () => {
  return (
    <div className="server-down-page">
      <Link className={classes.TopImg} to={Routes.notices}>
        <img src={clgLogo} alt="" />
      </Link>
      <div className="server-down-page__center-text">
        <img src={centerImg} alt="" />
        <p className="head-first">
          Oops! <span style={{ color: "#E85B5B" }}> Server Down</span>
        </p>

        <p className="head-second">
          Don’t panic! Something went wrong from our side
        </p>
        <Link>
          <Button width="35%">Try Again</Button>
        </Link>
        <Link to={Routes.notices} className="head-third">
          <p>Back to Homepage</p>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default ServerDownPage;
