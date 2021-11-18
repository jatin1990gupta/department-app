import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import Input from "../UI/Input";
import Checkbox from "../UI/Checkbox";
import facultyIcon from "../../Assets/icons//HomeIcons/LoginSection/facultyTitle.svg";
import studentIcon from "../../Assets/icons//HomeIcons/LoginSection/studentTitle.svg";
import { FACULTY_TEXT, STUDENT_TEXT } from "../../constants";
import { loginStudent } from "../../store/features/auth";
import { changeUserType } from "../../store/features/general";
import { Routes } from "../../constants/routes";

const LoginPrompt = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userType } = useSelector((state) => state.general);

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const onLogin = () => {
    if (userType === STUDENT_TEXT) {
      dispatch(loginStudent(inputEmail, inputPassword, rememberMe)).then(() => {
        history.push(Routes.notices);
      });
    }
  };

  const switchUser = (userType) => {
    dispatch(changeUserType(userType));
  };

  return (
    <div className="login-section__prompt">
      <p className="login-section__prompt__title">Login to continue</p>
      <div className="login-section__prompt__user-swap">
        <div
          onClick={() => switchUser(STUDENT_TEXT)}
          className={`login-section__prompt__user-swap__item ${
            userType === STUDENT_TEXT ? "swap-selected" : null
          }`}
        >
          <img src={studentIcon} alt="" />
          <p>Students</p>
        </div>
        <div
          onClick={() => switchUser(FACULTY_TEXT)}
          className={`login-section__prompt__user-swap__item ${
            userType === FACULTY_TEXT ? "swap-selected" : null
          }`}
        >
          <img src={facultyIcon} alt="" />
          <p>Faculties</p>
        </div>
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
      <div className="login-section__prompt__forgot-section">
        <Checkbox
          label="Remember Me"
          checked={rememberMe}
          onChange={() => {
            rememberMe ? setRememberMe(false) : setRememberMe(true);
          }}
        />
        <Link className="forgot" to={Routes.forgotPass}>
          Forgot Password?
        </Link>
      </div>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default LoginPrompt;
