import React from "react";

import classes from "./ServiceItem.module.css";

const ServiceItem = (props) => {
  return (
    <div className={classes.ServiceItem}>
      <img src={props.Img} alt="" />
      <p className={classes.Title}>{props.Title}</p>
      <p className={classes.Body}>{props.Body}</p>
    </div>
  );
};

export default ServiceItem;
