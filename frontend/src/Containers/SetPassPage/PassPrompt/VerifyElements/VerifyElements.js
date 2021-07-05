import React from "react";

import classes from "./VerifyElements.module.css";

const VerifyElements = (props) => {
  let verifiedBullet = null;
  let verifiedText = null;

  if (props.verified) {
    verifiedBullet = { background: "#4E72F1" };
    verifiedText = { color: "#2E2E2E" };
  }

  return (
    <div className={classes.VerifyElements}>
      <div style={verifiedBullet} className={classes.Bullet}></div>
      <p style={verifiedText}>{props.title}</p>
    </div>
  );
};

export default VerifyElements;
