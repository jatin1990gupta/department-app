import React from "react";

import dropdownImg from "../../Assets/icons/dropdown.png";

const DropdownSelect = ({ Title, value, change, children }) => {
  return (
    <div className="dropdown">
      <select
        style={{
          backgroundImage: `url(${dropdownImg})`,
          backgroundPosition: "right 15px center",
          backgroundRepeat: "no-repeat",
        }}
        className={Title}
        value={value}
        onChange={(e) => change(e.target.value)}
      >
        {children}
      </select>
    </div>
  );
};

export default DropdownSelect;
