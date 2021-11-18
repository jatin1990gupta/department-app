import React from "react";
import { Link } from "react-router-dom";

import classes from "./NotFound.module.css";

import centerImg from "../../Assets/img/NotFound/notFound.png";
import clgLogo from "../../Assets/img/clg-logo-dark.png";
import Button from "../UI/Button";
import { Routes } from "../../constants/routes";

const NotFound = () => {
  return (
    <div className="not-found">
      <Link className={classes.TopImg} to={Routes.notices}>
        <img src={clgLogo} alt="" />
      </Link>
      <div className="not-found__center-text">
        <img src={centerImg} alt="" />
        <p className="head-first">Aww! snap 🤞</p>

        <p className="head-second">
          Sorry, we can’t find that page! it might be an old link or maybe it
          removed.
        </p>
        <Link to={Routes.notices}>
          <Button width="60%">Back to Homepage</Button>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default NotFound;
