import React from "react";
import { Link } from "react-router-dom";

import classes from "./LinkExpiredPage.module.css";

import centerImg from "../../../Assets/img/LinkExpired/expired.png";
import clgLogo from "../../../Assets/img/clg-logo-dark.png";
import Button from "../../../Components/UI/Button/Button";

const LinkExpiredPage = (props) => {
  return (
    <div className={classes.LinkExpiredPage}>
      <Link className={classes.TopImg} to="/">
        <img src={clgLogo} alt="" />
      </Link>
      <div className={classes.CenterText}>
        <img src={centerImg} alt="" />
        <p className={classes.FirstHead}>
          Uhoh. Link is <span style={{ color: "#E85B5B" }}>expired</span>
        </p>

        <p className={classes.SecondHead}>
          If you want to reset your password. Send again a{" "}
          <span style={{ color: "#5A22B9" }}>new mail</span>
        </p>
        <Link to="/">
          <Button width="60%">Back to Homepage</Button>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default LinkExpiredPage;
