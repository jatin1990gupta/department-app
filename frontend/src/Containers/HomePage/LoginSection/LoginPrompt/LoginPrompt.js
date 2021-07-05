import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./LoginPrompt.module.css";
import * as actions from "../../../../store/actions/index";

import SwapItem from "./SwapItem/SwapItem";
import Input from "../../../../Components/UI/Input/Input";
import facultyIcon from "../../../../Assets/icons//HomeIcons/LoginSection/facultyTitle.svg";
import studentIcon from "../../../../Assets/icons//HomeIcons/LoginSection/studentTitle.svg";
import Checkbox from "../../../../Components/UI/Checkbox/Checkbox";

const LoginPrompt = (props) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const onLogin = () => {
    const loginData = {
      email: inputEmail,
      password: inputPassword,
    };
    let url =
      props.userType === "student"
        ? "/auth/studentLogin"
        : "/auth/facultyLogin";
    props.onAuth(loginData, url);
  };

  return (
    <div className={classes.LoginPrompt}>
      <p className={classes.LoginTitle}>Login to continue</p>
      <div className={classes.LoginSwap}>
        <SwapItem
          clicked={() => props.changeUserType("student")}
          title="Students"
          titleIcon={studentIcon}
          selected={props.userType === "student" ? true : false}
        />
        <SwapItem
          clicked={() => props.changeUserType("faculty")}
          title="Faculties"
          titleIcon={facultyIcon}
          selected={props.userType === "faculty" ? true : false}
        />
      </div>
      <Input
        type="text"
        placeholder="Enrollment Number"
        value={inputEmail}
        onChange={(event) => setInputEmail(event.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={inputPassword}
        onChange={(event) => setInputPassword(event.target.value)}
      />
      <div className={classes.ForgotSection}>
        <Checkbox
          label="Remember Me"
          checked={rememberMe}
          onChange={() => {
            rememberMe ? setRememberMe(false) : setRememberMe(true);
          }}
        />
        <Link
          className={classes.Forgot}
          to={props.userType === "student" ? "/forgotPass" : "/"}
        >
          Forgot Password?
        </Link>
      </div>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    userType: state.general.userType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (authData, url) => dispatch(actions.auth(authData, url)),
    changeUserType: (userType) => dispatch(actions.changeUserType(userType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPrompt);
