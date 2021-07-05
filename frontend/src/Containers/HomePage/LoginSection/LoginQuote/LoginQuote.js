import React from "react";

import classes from "./LoginQuote.module.css";

import availabilityIcon from "../../../../Assets/icons/HomeIcons/availability.png";

const LoginQuote = () => {
  let quoteHead;
  switch (window.location.pathname) {
    case "/notice":
      quoteHead = (
        <p className={classes.QuoteTitle}>
          Just Login and updated with latest notices
        </p>
      );
      break;
    case "/leaveForm":
      quoteHead = (
        <p className={classes.QuoteTitle}>
          Submit your Leave Application directly to your Faculties
        </p>
      );
      break;
    case "/timetable":
      quoteHead = (
        <p className={classes.QuoteTitle}>Get updated with latest timetable</p>
      );
      break;
    case "/profile":
      quoteHead = (
        <p className={classes.QuoteTitle}>
          Check all your personal details in one place
        </p>
      );
      break;
    default:
      quoteHead = null;
  }

  return (
    <div className={classes.LoginQuote}>
      {quoteHead}
      <p className={classes.QuoteSummary}>
        Login and check out latest notices of any seminar news, happening in
        your depaartment
      </p>
      <div className={classes.CheckAvailabilty}>
        <img src={availabilityIcon} alt="" />
        <p>Check Availability</p>
      </div>
    </div>
  );
};

export default LoginQuote;
