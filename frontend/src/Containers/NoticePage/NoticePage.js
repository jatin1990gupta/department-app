import React from "react";

import classes from "./NoticePage.module.css";

import Navbar from "../../Components/Navbar/Navbar";

const NoticePage = () => {
  let items = [];
  for (let i = 0; i < 12; i++) {
    items.push(<p className={classes.NoticeItems}>Item</p>);
  }

  return (
    <div className={classes.NoticePage}>
      <Navbar />
      <div className={classes.NoticePageContent}>
        <div className={classes.NoticeTitle}>
          <p>Notices for All Students</p>
          <p>Create New Notice</p>
        </div>
        <div className={classes.NoticeBody}>{items}</div>
      </div>
    </div>
  );
};

export default NoticePage;
