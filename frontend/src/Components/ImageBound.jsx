import React from "react";

const ImageBound = ({ Img, children }) => {
  return (
    <div className="imagebound">
      <div className="frame">
        <img src={Img} alt="" />
        {children}
      </div>
    </div>
  );
};

export default ImageBound;
