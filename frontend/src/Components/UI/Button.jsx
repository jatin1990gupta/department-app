import React from "react";

const Button = ({ disabled, width, clicked, children }) => {
  return (
    <button
      disabled={disabled}
      style={{ width }}
      className="button"
      onClick={clicked}
    >
      {children}
    </button>
  );
};

export default Button;
