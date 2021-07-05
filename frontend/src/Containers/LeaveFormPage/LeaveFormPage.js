import React from "react";

import classes from "./LeaveFormPage.module.css";

import Navbar from "../../Components/Navbar/Navbar";

const LeaveFormPage = () => {
  return (
    <div className={classes.LeaveFormPage}>
      <Navbar />
      <div className={classes.Content}>
        <h4>Submit your leave form here.</h4>
        <h6>
          Please tell us a bit about your reason for leave so that we can send
          your application to your personalized faculty.
        </h6>
        <div className={classes.DaySelect}>
          <p>Same Day between College</p>
          <p>One or More No. of Days</p>
        </div>
        <p>Subject</p>
        <input placeholder="reason in brief within 30 words" />
        <p>Description</p>
        <textarea placeholder="explain your reason within 100 words" rows="5" />
        <div className={classes.BottomOptions}>
          <div className={classes.Options}>
            <div>
              Upload
              <input type="file" />
            </div>
            <div>
              Start Date
              <input type="file" />
            </div>
            <div>
              End Date
              <input type="file" />
            </div>
          </div>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default LeaveFormPage;
