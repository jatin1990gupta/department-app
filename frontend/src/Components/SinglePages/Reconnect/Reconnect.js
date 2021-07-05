import React from "react";
import { Link } from "react-router-dom";

import classes from "./Reconnect.module.css";

import centerImg from "../../../Assets/img/Reconnect/reconnect.png";
import clgLogo from "../../../Assets/img/clg-logo-dark.png";
import Button from "../../UI/Button/Button";

const Reconnect = (props) => {
  return (
    <div className={classes.Reconnect}>
      <Link className={classes.TopImg} to="/">
        <img src={clgLogo} alt="" />
      </Link>
      <div className={classes.CenterText}>
        <img src={centerImg} alt="" />
        <p className={classes.FirstHead}>Oops. your connection seeems off...</p>
        <p className={classes.SecondHead}>
          Keep calm, light a fire and press reconnect to try again
        </p>
        <Link>
          <Button width="30%">Reconnect</Button>
        </Link>
        <Link to="/" className={classes.ThirdHead}>
          <p>Back to Homepage</p>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Reconnect;
