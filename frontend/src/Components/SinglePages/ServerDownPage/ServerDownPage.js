import React from "react";
import { Link } from "react-router-dom";

import classes from "./ServerDownPage.module.css";

import centerImg from "../../../Assets/img/ServerDown/serverD.png";
import clgLogo from "../../../Assets/img/clg-logo-dark.png";
import Button from "../../../Components/UI/Button/Button";

const ServerDownPage = (props) => {
  return (
    <div className={classes.ServerDownPage}>
      <Link className={classes.TopImg} to="/">
        <img src={clgLogo} alt="" />
      </Link>
      <div className={classes.CenterText}>
        <img src={centerImg} alt="" />
        <p className={classes.FirstHead}>
          Oops! <span style={{ color: "#E85B5B" }}> Server Down</span>
        </p>

        <p className={classes.SecondHead}>
          Don’t panic! Something went wrong from our side
        </p>
        <Link>
          <Button width="35%">Try Again</Button>
        </Link>
        <Link to="/" className={classes.ThirdHead}>
          <p>Back to Homepage</p>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default ServerDownPage;
