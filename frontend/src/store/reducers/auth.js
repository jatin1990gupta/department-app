import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  token: null,
  loginAs: null,
  error: null,
  loading: null,
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const authLoginSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    loginAs: action.loginAs,
    error: null,
    loading: false,
  });
};

const authLoginFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};
const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
    loginAs: null,
    error: null,
    loading: false,
  });
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_LOGIN_SUCCESS:
      return authLoginSuccess(state, action);
    case actionTypes.AUTH_LOGIN_FAIL:
      return authLoginFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default authReducer;
