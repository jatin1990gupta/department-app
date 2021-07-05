import React from "react";
import { connect } from "react-redux";

import classes from "./NavContentStudent.module.css";

import NavItem from "../NavItem/NavItem";
import profileImg from "../../../Assets/icons/user.png";

const NavContentStudent = (props) => {
  return (
    <div className={classes.NavContentStudent}>
      <NavItem title="Notices" link="/" />
      <NavItem title="Leave Form" link="/leaveForm" />
      <NavItem title="My Timetable" link="/timetable" />
      {props.idToken ? (
        <NavItem link="/profile">
          <img src={profileImg} alt="" />
        </NavItem>
      ) : (
        <NavItem title="My Profile" link="/profile" />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    idToken: state.auth.token,
  };
};

export default connect(mapStateToProps)(NavContentStudent);
