import React from "react";
import { Link } from "react-router-dom";

import ClgLogo from "../../Assets/img/clg-logo-dark.png";
import { Routes } from "../../constants/routes";

const NavImg = () => {
  return (
    <Link to={Routes.notices} className="navbar__image">
      <img src={ClgLogo} alt="" />
    </Link>
  );
};

export default NavImg;
