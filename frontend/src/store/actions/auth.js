import * as actionTypes from "./actionTypes";

import axios from "../../axios-instance";

const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

const authLoginSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_LOGIN_SUCCESS,
    token: authData.token,
    loginAs: authData.loginAs,
  };
};

const authLoginFail = (error) => {
  return {
    type: actionTypes.AUTH_LOGIN_FAIL,
    error: error,
  };
};

export const auth = (authData, url) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post(url, authData)
      .then((response) => {
        console.log(response.data);
        dispatch(authLoginSuccess(response.data));
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        dispatch(authLoginFail(err.response));
      });
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};
