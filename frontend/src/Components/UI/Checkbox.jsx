import React from "react";

const Checkbox = ({ checked, onChange, label }) => {
  return (
    <div className="checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <p>{label}</p>
    </div>
  );
};

export default Checkbox;
