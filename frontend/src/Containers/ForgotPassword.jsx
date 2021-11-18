import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { UserInformation } from "../utils/userInfo";
import Input from "../Components/UI/Input";
import Button from "../Components/UI/Button";
import Spinner from "../Components/UI/Spinner";
import clgLogo from "../Assets/img/clg-logo-dark.png";
import forgotImg from "../Assets/img/ForgotPassword/forgotPass.png";
import { resetPassword } from "../store/features/auth";
import { Routes } from "../constants/routes";
import Notification from "../Components/Notification";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isLoading } = UserInformation();

  const [inputEmail, setInputEmail] = useState("");

  const sendLink = () => {
    dispatch(resetPassword(inputEmail)).then(() => {
      history.push(Routes.resetMailSent);
      Notification("success", "Success", "Reset mail Sent");
    });
  };

  return (
    <div className="forgot-password">
      <Link to={Routes.notices}>
        <img src={clgLogo} alt="" />
      </Link>
      <div className="forgot-password--left">
        <h3>Forgot Password?</h3>
        <h5>Don’t worry, happens to the best of us.</h5>
        {isLoading ? (
          <Spinner />
        ) : (
          <div style={{ width: "100%", textAlign: "left" }}>
            <h6>We’ll send a recovery link to </h6>
            <Input
              type="email"
              placeholder="Enter email"
              value={inputEmail}
              width="100%"
              onChange={(event) => {
                setInputEmail(event.target.value);
              }}
            />
          </div>
        )}
        <Button clicked={sendLink} width="100%">
          Send Reset link
        </Button>
        <Link to={Routes.notices} className="login-link">
          Back to Login
        </Link>
      </div>
      <div className="forgot-password--right">
        <img src={forgotImg} alt="" />
        <h2>
          Hard to remember many passwords? Don’t worry we{" "}
          <span style={{ color: "#5A22B9" }}>help</span> you here.
        </h2>
      </div>
    </div>
  );
};

export default ForgotPassword;
