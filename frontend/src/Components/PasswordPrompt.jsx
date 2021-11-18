import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import Input from "./UI/Input";
import Button from "./UI/Button";
import Spinner from "./UI/Spinner";
import { changePassword } from "../store/features/auth";
import { Routes } from "../constants/routes";
import { UserInformation } from "../utils/userInfo";
import { verifyOptions } from "../constants/password";
import NoticePage from "../Containers/NoticePage";

const PassPrompt = ({ token }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isLoading } = UserInformation();

  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");

  const setPassword = async () => {
    dispatch(changePassword(token, pass)).then(() => {
      history.push(Routes.passwordChanged);
      NoticePage("success", "Success", "Password Change Successful");
    });
  };

  return (
    <div className="set-password__prompt">
      <h4>Change Password</h4>
      <p>Restore acces to your account</p>
      {isLoading ? (
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
          <div className="verify-input">
            {verifyOptions.map((item, index) => (
              <div className="verify-input__points selected" key={index}>
                <div className="verify-input__points-bullet" />
                <p>{item}</p>
              </div>
            ))}
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
      <Link className="login-link" to={Routes.homePage}>
        Back to Login
      </Link>
    </div>
  );
};

export default PassPrompt;
