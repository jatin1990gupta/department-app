import React from "react";

import classes from "./SwapItem.module.css";

const SwapItem = (props) => {
  let bgStyle = null;
  let imgStyle = null;
  let pStyle = null;
  if (props.selected) {
    bgStyle = {
      color: "white",
      background: "#5A22B9",
    };
    imgStyle = {
      filter: "invert(1)",
    };
    pStyle = {
      color: "white",
    };
  }

  return (
    <div onClick={props.clicked} style={bgStyle} className={classes.SwapItem}>
      <img style={imgStyle} src={props.titleIcon} alt="" />
      <p style={pStyle}>{props.title}</p>
    </div>
  );
};

export default SwapItem;
