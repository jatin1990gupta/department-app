import React from "react";
import { Route } from "react-router-dom";

import LandingPage from "../Containers/LandingPage";
import { UserInformation } from "../utils/userInfo";

const ProtectedRoutes = ({ path, exact, component }) => {
  const { isAuthenticated } = UserInformation();

  return isAuthenticated ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Route path={path} exact={exact} component={LandingPage} />
  );
};

export default ProtectedRoutes;
