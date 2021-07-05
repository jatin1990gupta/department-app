import React from "react";

import classes from "./ServicesSection.module.css";

import ServiceItems from "./ServiceItems/ServiceItems";

const ServicesSection = (props) => {
  return (
    <div className={classes.ServicesSection}>
      <h3>
        Find all your <b>Needs</b> in one place
      </h3>
      <p>
        See what features and information we provided for you to make your life
        easier.
      </p>
      <ServiceItems />
    </div>
  );
};

export default ServicesSection;
