import React from "react";
import { Link } from "react-router-dom";

import classes from "./LinkExpiredPage.module.css";

import centerImg from "../../Assets/img/LinkExpired/expired.png";
import clgLogo from "../../Assets/img/clg-logo-dark.png";
import Button from "../UI/Button";
import { Routes } from "../../constants/routes";

const LinkExpiredPage = () => {
  return (
    <div className="link-expired">
      <Link className={classes.TopImg} to={Routes.notices}>
        <img src={clgLogo} alt="" />
      </Link>
      <div className="link-expired__center-text">
        <img src={centerImg} alt="" />
        <p className="head-first">
          Uhoh. Link is <span style={{ color: "#E85B5B" }}>expired</span>
        </p>

        <p className="head-second">
          If you want to reset your password. Send again a{" "}
          <span style={{ color: "#5A22B9" }}>new mail</span>
        </p>
        <Link to={Routes.notices}>
          <Button width="60%">Back to Homepage</Button>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default LinkExpiredPage;
