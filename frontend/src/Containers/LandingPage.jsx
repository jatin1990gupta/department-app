import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import LoginSection from "../Components/LoginSection/";
import ServicesSection from "../Components/ServicesSection";

const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
        <Navbar />
        <LoginSection />
        <ServicesSection />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
