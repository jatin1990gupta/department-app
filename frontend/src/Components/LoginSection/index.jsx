import React from "react";

import ClgImg from "../../Assets/img/HomeImgs/college.jfif";
import LoginQuote from "./LoginQuote";
import LoginPrompt from "./LoginPrompt";

const LoginSection = () => {
  const bgStyle = {
    backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.67) 0%, rgba(88, 88, 88, 0.18) 55.62%, rgba(196, 196, 196, 0) 106.22%), url(${ClgImg})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
  };

  return (
    <div style={bgStyle} className="login-section">
      <LoginQuote />
      <LoginPrompt />
    </div>
  );
};

export default LoginSection;
