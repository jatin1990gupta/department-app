import React from "react";

import Navbar from "../Components/Navbar";

const NoticePage = () => {
  let items = [];
  for (let i = 0; i < 12; i++) {
    items.push(<p>Item</p>);
  }

  return (
    <div className="notice-page">
      <Navbar />
      <div className="notice-page__content">
        <div className="notice-page__content__title">
          <p>Notices for All Students</p>
          <p>Create New Notice</p>
        </div>
        <div className="notice-page__content__body">{items}</div>
      </div>
    </div>
  );
};

export default NoticePage;
