import React from "react";
import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

import clgLogo from "../../Assets/img/clg-logo-light.png";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.Content}>
        <div className={classes.ContentLeft}>
          <img src={clgLogo} alt="" />
        </div>
        <div className={classes.ContentRight}>
          <div className={classes.ContentClm}>
            <Link className={classes.link} to="/">
              <p>Notices</p>
            </Link>
            <Link className={classes.link} to="/">
              <p>Leave Form</p>
            </Link>
            <Link className={classes.link} to="/">
              <p>Timetable</p>
            </Link>
          </div>
          <div className={classes.ContentClm}>
            <Link className={classes.link} to="/">
              <p>Oriental College of Technology</p>
            </Link>
            <Link className={classes.link} to="/">
              <p>Profile</p>
            </Link>
            <Link className={classes.link} to="/">
              <p>Help Center</p>
            </Link>
          </div>
          <div className={classes.ContentClm}>
            <Link className={classes.link} to="/">
              <p>Security</p>
            </Link>
            <Link className={classes.link} to="/">
              <p>Privacy Policy</p>
            </Link>
            <Link className={classes.link} to="/">
              <p>Terms & Conditions</p>
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.Bottom}>
        <div className={classes.BottomLeft}>
          © Copyright 2021 Oriental College of Technology, Inc. All rights
          reserved. Various trademarks held by their respective owners.
        </div>
        <div className={classes.BottomRight}>
          Made by <b>Jatin</b> & <b>Abiral</b>{" "}
          <span style={{ color: "red" }}>♥</span> in 2021.
        </div>
      </div>
    </div>
  );
};

export default Footer;
