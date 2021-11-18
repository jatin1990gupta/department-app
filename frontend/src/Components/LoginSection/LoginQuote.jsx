import React from "react";
import { useSelector } from "react-redux";

import availabilityIcon from "../../Assets/icons/HomeIcons/availability.png";
import { LOGIN_QUOTE, QUOTE_SUMMARY } from "../../constants/texts/login";

const LoginQuote = () => {
  const { loginQuoteIndex } = useSelector((state) => state.general);

  return (
    <div className="login-section__quote">
      <p>{LOGIN_QUOTE[loginQuoteIndex]}</p>
      <p>{QUOTE_SUMMARY}</p>
      <div className="check-avail">
        <img src={availabilityIcon} alt="" />
        <p>Check Availability</p>
      </div>
    </div>
  );
};

export default LoginQuote;
