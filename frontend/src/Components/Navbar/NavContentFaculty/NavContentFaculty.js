import React from "react";
import { connect } from "react-redux";

import classes from "./NavContentFaculty.module.css";

import NavItem from "../NavItem/NavItem";
import profileImg from "../../../Assets/icons/user.png";

const NavContentFaculty = (props) => {
  return (
    <div className={classes.NavContentFaculty}>
      <NavItem title="Notices" link="/notice" />
      <NavItem title="Leave Requests" />
      <NavItem title="Timetable" link="/timetable" />
      {props.idToken ? (
        <NavItem link="/profile">
          <img src={profileImg} alt="" />
        </NavItem>
      ) : (
        <NavItem title="Profile" link="/profile" />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    idToken: state.auth.token,
  };
};

export default connect(mapStateToProps)(NavContentFaculty);
