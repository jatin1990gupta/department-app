import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./NavItem.module.css";
import * as actions from "../../../store/actions/index";

const NavItem = (props) => {
  return (
    <Link
      to={props.link}
      style={props.link === props.pageTitle ? { color: "#5a22b9" } : {}}
      onClick={() => props.changePage(props.link)}
      className={classes.NavItem}
    >
      {props.title}
      {props.children}
    </Link>
  );
};

const mapStateToProps = (state) => {
  return {
    pageTitle: state.general.pageTitle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (pageTitle) => dispatch(actions.changeLoadedPage(pageTitle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavItem);
