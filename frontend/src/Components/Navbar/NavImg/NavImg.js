import React from "react";
import { Link } from "react-router-dom";

import classes from "./NavImg.module.css";

import ClgLogo from "../../../Assets/img/clg-logo-dark.png";

const NavImg = () => {
  return (
    <Link to="/" className={classes.NavImg}>
      <img src={ClgLogo} alt="" />
    </Link>
  );
};

export default NavImg;
