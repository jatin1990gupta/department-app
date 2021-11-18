import React from "react";

const Input = ({ width, icon, type, value, onChange, placeholder }) => {
  return (
    <div style={{ width }} className="input">
      <input
        style={{
          backgroundImage: `url(${icon})`,
          backgroundPosition: "right 15px center",
          backgroundRepeat: "no-repeat",
        }}
        type={type}
        value={value}
        required
        onChange={onChange}
      />
      <span>{placeholder}</span>
    </div>
  );
};

export default Input;
