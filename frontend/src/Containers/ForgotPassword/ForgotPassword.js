import React, { useState } from "react";
import axios from "../../axios-instance";
import { Link, Redirect } from "react-router-dom";

import classes from "./ForgotPassword.module.css";

import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button";
import Spinner from "../../Components/UI/Spinner/Spinner";
import clgLogo from "../../Assets/img/clg-logo-dark.png";
import forgotImg from "../../Assets/img/ForgotPassword/forgotPass.png";

const ForgotPassword = () => {
  const [inputEmail, setInputEmail] = useState("");

  const [sending, setSending] = useState(false);
  const [linkSent, setLinkSent] = useState(false);

  const sendLink = () => {
    setSending(true);
    axios
      .post("/auth/resetLink", { email: inputEmail })
      .then((response) => {
        setSending(false);
        setLinkSent(true);
        console.log(response.data);
      })
      .catch((error) => {
        setSending(false);
        console.log(error.response);
      });
  };

  return (
    <div className={classes.ForgotPassword}>
      {linkSent ? <Redirect to="/resetMailSent" /> : null}
      <Link className={classes.TopImg} to="/">
        <img src={clgLogo} alt="" />
      </Link>
      <div className={classes.ForgotPasswordLeft}>
        <h3>Forgot Password?</h3>
        <h5>Don’t worry, happens to the best of us.</h5>
        {sending ? (
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
        <Link to="/" className={classes.LoginLink}>
          Back to Login
        </Link>
      </div>
      <div className={classes.ForgotPasswordRight}>
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
