import React from "react";

import { servicesItems } from "../constants/services";

const ServicesSection = (props) => {
  return (
    <div className="services-section">
      <h3>
        Find all your <b>Needs</b> in one place
      </h3>
      <p>
        See what features and information we provided for you to make your life
        easier.
      </p>
      <div className="services-section__items">
        {servicesItems.map((item, idx) => (
          <div className="services-section__items__item">
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
