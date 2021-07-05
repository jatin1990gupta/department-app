import React from "react";
import { Link, useParams } from "react-router-dom";

import classes from "./SetPassPage.module.css";

import clgLogo from "../../Assets/img/clg-logo-dark.png";
import setPassImg from "../../Assets/img/SetPassword/setPass.png";
import PassPrompt from "./PassPrompt/PassPrompt";

const SetPassPage = (props) => {
  const { token } = useParams();

  return (
    <div className={classes.SetPassPage}>
      <Link className={classes.TopImg} to="/">
        <img src={clgLogo} alt="" />
      </Link>
      <div className={classes.SetPassPageLeft}>
        <PassPrompt token={token} />
      </div>
      <div className={classes.SetPassPageRight}>
        <img src={setPassImg} alt="" />
        <h2>
          You’re On. Set a{" "}
          <span style={{ color: "#5A22B9", fontFamily: "Merriweather" }}>
            New Password
          </span>
        </h2>
      </div>
    </div>
  );
};

export default SetPassPage;
