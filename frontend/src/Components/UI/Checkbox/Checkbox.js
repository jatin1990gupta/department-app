import React from "react";

import classes from "./Checkbox.module.css";

const Checkbox = (props) => {
  return (
    <div className={classes.Checkbox}>
      <input
        className={classes.Box}
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <p className={classes.Label}>{props.label}</p>
    </div>
  );
};

export default Checkbox;
