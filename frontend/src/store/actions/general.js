import * as actionTypes from "./actionTypes";

export const changeUserType = (userType) => {
  return {
    type: actionTypes.CHANGE_USER_TYPE,
    userType: userType,
  };
};

export const changeLoadedPage = (pageTitle) => {
  return {
    type: actionTypes.CHANGE_LOADED_PAGE,
    pageTitle: pageTitle,
  };
};
