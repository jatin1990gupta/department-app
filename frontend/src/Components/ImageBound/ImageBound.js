import React from "react";

import classes from "./ImageBound.module.css";

const ImageBound = (props) => {
  return (
    <div className={classes.ImageBound}>
      <div className={classes.Frame}>
        <img src={props.Img} alt="" />
        {props.children}
      </div>
    </div>
  );
};

export default ImageBound;
