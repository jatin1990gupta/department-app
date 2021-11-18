import React from "react";
import { Link, useParams } from "react-router-dom";

import clgLogo from "../Assets/img/clg-logo-dark.png";
import setPassImg from "../Assets/img/SetPassword/setPass.png";
import PassPrompt from "../Components/PasswordPrompt";
import { Routes } from "../constants/routes";

const SetPassPage = () => {
  const { token } = useParams();

  return (
    <div className="set-password">
      <Link to={Routes.notices}>
        <img src={clgLogo} alt="" />
      </Link>
      <div className="set-password--left">
        <PassPrompt token={token} />
      </div>
      <div className="set-password--right">
        <img src={setPassImg} alt="" />
        <h2>
          You’re On. Set a <span>New Password</span>
        </h2>
      </div>
    </div>
  );
};

export default SetPassPage;
