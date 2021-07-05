import React from "react";
import { Link } from "react-router-dom";

import classes from "./MailSentPage.module.css";

import centerImg from "../../../Assets/img/MailSent/mail.png";
import clgLogo from "../../../Assets/img/clg-logo-dark.png";
import Button from "../../../Components/UI/Button/Button";

const MailSentPage = (props) => {
  return (
    <div className={classes.MailSentPage}>
      <Link className={classes.TopImg} to="/">
        <img src={clgLogo} alt="" />
      </Link>
      <div className={classes.CenterText}>
        <img src={centerImg} alt="" />
        <p>
          We have successfully sent you a mail on{" "}
          <span style={{ color: "#5A22B9" }}>yourname@example.com</span>
        </p>
        <Link to="/">
          <Button width="60%">Back to Homepage</Button>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default MailSentPage;
