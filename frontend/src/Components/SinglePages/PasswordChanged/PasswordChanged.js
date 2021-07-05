import React from "react";
import { Link } from "react-router-dom";

import classes from "./PasswordChanged.module.css";

import centerImg from "../../../Assets/img/PasswordChanged/passwordChanged.png";
import clgLogo from "../../../Assets/img/clg-logo-dark.png";
import Button from "../../../Components/UI/Button/Button";

const PasswordChanged = (props) => {
  return (
    <div className={classes.PasswordChanged}>
      <Link className={classes.TopImg} to="/">
        <img src={clgLogo} alt="" />
      </Link>
      <div className={classes.CenterText}>
        <img src={centerImg} alt="" />
        <p className={classes.FirstHead}>
          You have
          <span style={{ color: "#5A22B9" }}> Succesfully</span> changed your
          Password
        </p>
        <Link>
          <Button width="45%">Login as Jatin Gupta</Button>
        </Link>
        <Link to="/" className={classes.ThirdHead}>
          <p>Back to Homepage</p>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default PasswordChanged;
