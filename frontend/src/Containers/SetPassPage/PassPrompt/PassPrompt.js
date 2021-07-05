import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import classes from "./PassPrompt.module.css";
import axios from "../../../axios-instance";

import Input from "../../../Components/UI/Input/Input";
import Button from "../../../Components/UI/Button/Button";
import Spinner from "../../../Components/UI/Spinner/Spinner";
import VerifyElements from "./VerifyElements/VerifyElements";

const PassPrompt = (props) => {
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");

  const [setting, setSetting] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);

  const setPassword = () => {
    setSetting(true);
    axios
      .post("/auth/setPassword", { token: props.token, password: pass })
      .then((response) => {
        setSetting(false);
        setPasswordChanged(true);
        console.log(response.data);
      })
      .catch((error) => {
        setSetting(false);
        console.log(error.response);
      });
  };

  return (
    <div className={classes.PassPrompt}>
      {passwordChanged ? <Redirect to="/passwordChanged" /> : null}
      <h4 className={classes.Head}>Change Password</h4>
      <p className={classes.SubHead}>Restore acces to your account</p>
      {setting ? (
        <Spinner />
      ) : (
        <div>
          <Input
            type="password"
            placeholder="Set New Password"
            value={pass}
            onChange={(event) => {
              setPass(event.target.value);
            }}
          />
          <div className={classes.InputVerify}>
            <VerifyElements verified title="One small letter" />
            <VerifyElements title="One special character" />
            <VerifyElements title="One capital letter" />
            <VerifyElements title="Eight characters minimum" />
            <VerifyElements title="One number" />
          </div>
          <Input
            type="password"
            placeholder="Confirm Password"
            value={newPass}
            onChange={(event) => {
              setNewPass(event.target.value);
            }}
          />
        </div>
      )}
      <Button width="100%" clicked={setPassword}>
        Set Password
      </Button>
      <Link className={classes.LoginLink} to="/">
        Back to Login
      </Link>
    </div>
  );
};

export default PassPrompt;
