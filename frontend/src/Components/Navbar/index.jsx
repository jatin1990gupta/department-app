import React from "react";
import { useSelector } from "react-redux";

import NavImg from "./NavImg";
import { STUDENT_TEXT } from "../../constants";
import {
  facultyOptions,
  profileTab,
  studentOptions,
} from "../../constants/navbar";
import NavItem from "./NavItem";
import { UserInformation } from "../../utils/userInfo";
import profileImg from "../../Assets/icons/user.png";
import { Routes } from "../../constants/routes";

const Navbar = () => {
  const { userType } = useSelector((state) => state.general);
  const { isAuthenticated } = UserInformation();
  return (
    <div className="navbar">
      <NavImg />
      <div className="navbar__content">
        {userType === STUDENT_TEXT
          ? studentOptions.map((item) => (
              <NavItem
                title={item.title}
                link={item.link}
                key={item.id}
                itemIndex={item.id}
              />
            ))
          : facultyOptions.map((item) => (
              <NavItem
                title={item.title}
                link={item.link}
                key={item.id}
                itemIndex={item.id}
              />
            ))}
        {isAuthenticated ? (
          <NavItem link={Routes.profile} itemIndex={profileTab.id}>
            <img src={profileImg} alt="" />
          </NavItem>
        ) : (
          <NavItem
            title={profileTab.title}
            link={profileTab.link}
            itemIndex={profileTab.id}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
