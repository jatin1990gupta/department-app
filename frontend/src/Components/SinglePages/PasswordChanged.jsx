import React from "react";
import { Link } from "react-router-dom";

import centerImg from "../../Assets/img/PasswordChanged/passwordChanged.png";
import clgLogo from "../../Assets/img/clg-logo-dark.png";
import Button from "../UI/Button";
import { Routes } from "../../constants/routes";
const PasswordChanged = () => {
  return (
    <div className="password-changed">
      <Link to={Routes.notices}>
        <img src={clgLogo} alt="" />
      </Link>
      <div className="password-changed__center-text">
        <img src={centerImg} alt="" />
        <p className="head-first">
          You have
          <span style={{ color: "#5A22B9" }}> Succesfully</span> changed your
          Password
        </p>
        <Link>
          <Button width="45%">Login as Jatin Gupta</Button>
        </Link>
        <Link to={Routes.notices} className="head-third">
          <p>Back to Homepage</p>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default PasswordChanged;
