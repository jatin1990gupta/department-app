import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div style={{ width: props.width }} className={classes.Input}>
      <input
        style={{
          backgroundImage: `url(${props.icon})`,
          backgroundPosition: "right 15px center",
          backgroundRepeat: "no-repeat",
        }}
        type={props.type}
        value={props.value}
        required
        onChange={props.onChange}
      />
      <span>{props.placeholder}</span>
    </div>
  );
};

export default Input;
