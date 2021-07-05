import React from "react";
import { connect } from "react-redux";

import classes from "./ProfilePage.module.css";
import * as actions from "../../store/actions/index";

import profilePic from "../../Assets/img/ProfilePage/profile.png";
import Navbar from "../../Components/Navbar/Navbar";

const ProfilePage = (props) => {
  return (
    <div className={classes.ProfilePage}>
      <Navbar />
      <div className={classes.ProfileOptions}>
        <p className={classes.optionLeft}>Profile</p>
        <p
          style={{ cursor: "pointer" }}
          className={classes.optionRight}
          onClick={props.onLogout}
        >
          Logout
        </p>
      </div>
      <div className={classes.ProfileContent}>
        <div className={classes.ProfilePageLeft}>
          <div className={classes.Head}>
            <h1>PERSONAL DETAILS</h1>
          </div>
          <img src={profilePic} alt="" />
          <div className={classes.PDetails}>
            <div className={classes.Title}>
              <h3>NAME: </h3>
              <h3>SEMESTER: </h3>
              <h3>COLLEGE: </h3>
              <h3>BRANCH: </h3>
              <h3>ENROLLMENT NO.: </h3>
            </div>
            <div className={classes.Body}>
              <p>Jatin Gupta </p>
              <p>5TH </p>
              <p>OCT </p>
              <p>CSE </p>
              <p>0126CS181052 </p>
            </div>
          </div>
        </div>
        <div className={classes.ProfilePageRight}>
          <div className={classes.Head}>
            <h1>ABOUT ME</h1>
          </div>
          <div className={classes.ADetails}>
            <div className={classes.AboutP}>
              <div className={classes.Title}>
                <h3>FATHER’S NAME : </h3>
                <h3>DEGREE : </h3>
                <h3>AGE : </h3>
                <h3>E-MAIL : </h3>
                <h3>PHONE (WHATSAPP) : </h3>
                <h3>GENDER : </h3>
                <h3>CATEGORY : </h3>
              </div>
              <div className={classes.Body}>
                <p>Jatin Gupta </p>
                <p>B.TECH </p>
                <p>20 </p>
                <p className={classes.Hlight}>0126CS181052@oriental.ac.in </p>
                <p className={classes.Hlight}>+91- 9888888888 </p>
                <p>Male </p>
                <p>GENERAL </p>
              </div>
            </div>
            <div className={classes.AboutP}>
              <div className={classes.Title}>
                <h3>MOTHER’S NAME :</h3>
                <h3>HOD : </h3>
                <h3>TG : </h3>
                <h3>HOMETOWN : </h3>
                <h3>PHONE : </h3>
                <h3>DOB : </h3>
              </div>
              <div className={classes.Body}>
                <p>Jatin Gupta </p>
                <p>Prof. Sanjay Sharma </p>
                <p>Amit Dubey </p>
                <p>Lalitpur (U.P.) </p>
                <p className={classes.Hlight}>+91- 8888888889 </p>
                <p>13-02-2000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
