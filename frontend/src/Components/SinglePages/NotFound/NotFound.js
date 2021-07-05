import React from "react";
import { Link } from "react-router-dom";

import classes from "./NotFound.module.css";

import centerImg from "../../../Assets/img/NotFound/notFound.png";
import clgLogo from "../../../Assets/img/clg-logo-dark.png";
import Button from "../../UI/Button/Button";

const NotFound = (props) => {
  return (
    <div className={classes.NotFound}>
      <Link className={classes.TopImg} to="/">
        <img src={clgLogo} alt="" />
      </Link>
      <div className={classes.CenterText}>
        <img src={centerImg} alt="" />
        <p className={classes.FirstHead}>Aww! snap 🤞</p>

        <p className={classes.SecondHead}>
          Sorry, we can’t find that page! it might be an old link or maybe it
          removed.
        </p>
        <Link to="/">
          <Button width="60%">Back to Homepage</Button>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default NotFound;
