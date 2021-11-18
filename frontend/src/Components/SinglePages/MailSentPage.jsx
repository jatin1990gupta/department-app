import React from "react";
import { Link } from "react-router-dom";

import centerImg from "../../Assets/img/MailSent/mail.png";
import clgLogo from "../../Assets/img/clg-logo-dark.png";
import Button from "../UI/Button";
import { Routes } from "../../constants/routes";

const MailSentPage = () => {
  return (
    <div className="mail-sent">
      <Link to={Routes.notices}>
        <img src={clgLogo} alt="" />
      </Link>
      <div className="mail-sent__center-text">
        <img src={centerImg} alt="" />
        <p>
          We have successfully sent you a mail on{" "}
          <span style={{ color: "#5A22B9" }}>yourname@example.com</span>
        </p>
        <Link to={Routes.notices}>
          <Button width="60%">Back to Homepage</Button>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default MailSentPage;
