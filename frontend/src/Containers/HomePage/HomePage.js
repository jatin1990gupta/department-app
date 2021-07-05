import React from "react";

import classes from "./HomePage.module.css";

import Navbar from "../../Components/Navbar/Navbar";
import LoginSection from "./LoginSection/LoginSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import Footer from "../../Components/Footer/Footer";

const HomePage = (props) => {
  return (
    <div>
      <div className={classes.HomePage}>
        <Navbar />
        <LoginSection />
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
