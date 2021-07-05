import React from "react";

import classes from "./DropdownSelect.module.css";

import dd from "../../../Assets/icons/dropdown.png";

const DropdownSelect = (props) => {
  return (
    <div className={classes.DropdownSelect}>
      <select
        style={{
          backgroundImage: `url(${dd})`,
          backgroundPosition: "right 15px center",
          backgroundRepeat: "no-repeat",
        }}
        className={props.Title}
        value={props.value}
        onChange={(e) => props.change(e.target.value)}
      >
        {props.children}
      </select>
    </div>
  );
};

export default DropdownSelect;
