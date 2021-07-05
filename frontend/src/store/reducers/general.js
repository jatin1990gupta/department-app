import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  userType: "student",
  pageTitle: "/",
};

const changeUserType = (state, action) => {
  return updateObject(state, {
    userType: action.userType,
  });
};

const changeLoadedPage = (state, action) => {
  return updateObject(state, {
    pageTitle: action.pageTitle,
  });
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_USER_TYPE:
      return changeUserType(state, action);
    case actionTypes.CHANGE_LOADED_PAGE:
      return changeLoadedPage(state, action);
    default:
      return state;
  }
};

export default generalReducer;
