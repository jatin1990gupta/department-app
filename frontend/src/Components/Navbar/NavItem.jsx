import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { changeLoginQuoteIndex } from "../../store/features/general";

const NavItem = ({ link, title, itemIndex, children }) => {
  const dispatch = useDispatch();
  const { loginQuoteIndex } = useSelector((state) => state.general);

  return (
    <Link
      to={link}
      style={itemIndex === loginQuoteIndex ? { color: "#5a22b9" } : {}}
      onClick={() => dispatch(changeLoginQuoteIndex(itemIndex))}
      className="navbar__content__item"
    >
      {title}
      {children}
    </Link>
  );
};

export default NavItem;
