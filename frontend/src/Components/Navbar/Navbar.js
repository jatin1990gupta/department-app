import React from "react";
import { connect } from "react-redux";

import classes from "./Navbar.module.css";

import NavImg from "./NavImg/NavImg";
import NavContentStudent from "./NavContentStudent/NavContentStudent";
import NavContentFaculty from "./NavContentFaculty/NavContentFaculty";

const Navbar = (props) => {
  console.log(window.location.pathname);
  return (
    <div className={classes.Navbar}>
      <NavImg />
      {props.userType === "student" ? (
        <NavContentStudent />
      ) : (
        <NavContentFaculty />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userType: state.general.userType,
  };
};

export default connect(mapStateToProps)(Navbar);
