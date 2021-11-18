import { createSlice } from "@reduxjs/toolkit";
import {
  sendResetLink,
  setNewPassword,
  studentLogin,
} from "../../service/auth";
import Notification from "../../Components/Notification";
import { clearStorage } from "../../utils/storage";

const onStart = (state) => {
  state.isLoading = true;
};

const onLogin = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.isAuthenticated = true;
  state.user = action.payload;
};

const onLogout = (state) => {
  state.isLoading = false;
  state.error = null;
  state.isAuthenticated = false;
  state.user = {};
};

const onSuccess = (state) => {
  state.isLoading = false;
  state.error = null;
};

const onError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  Notification("error", "Error", "Invalid Credentials");
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isAuthenticated: false,
    user: {},
    error: null,
  },
  reducers: { onStart, onLogin, onLogout, onSuccess, onError },
});

export const loginStudent =
  (emailId, password, rememberMe) => async (dispatch) => {
    try {
      dispatch(authSlice.actions.onStart());
      const userdata = await studentLogin(emailId, password);
      const { name, email, role, accessToken, refreshToken } = userdata;

      if (rememberMe) {
        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            name,
            email,
            role,
            accessToken,
            refreshToken,
          })
        );
      } else {
        sessionStorage.setItem(
          "userInfo",
          JSON.stringify({
            name,
            email,
            role,
            accessToken,
            refreshToken,
          })
        );
      }
      dispatch(authSlice.actions.onLogin(userdata));
    } catch (err) {
      dispatch(authSlice.actions.onError(err.toString()));
    }
  };

export const setCurrentUser = () => (dispatch) => {
  try {
    dispatch(authSlice.actions.onStart());
    localStorage.userInfo
      ? dispatch(authSlice.actions.onLogin(JSON.parse(localStorage.userInfo)))
      : dispatch(
          authSlice.actions.onLogin(JSON.parse(sessionStorage.userInfo))
        );
  } catch (err) {
    dispatch(authSlice.actions.onError(err.toString()));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch(authSlice.actions.onStart());
    clearStorage();
    dispatch(authSlice.actions.onLogout());
  } catch (err) {
    dispatch(authSlice.actions.onError(err.toString()));
  }
};

export const resetPassword = (email) => async (dispatch) => {
  dispatch(authSlice.actions.onStart());
  await sendResetLink(email);
  dispatch(authSlice.actions.onSuccess());
};

export const changePassword = (token, password) => async (dispatch) => {
  dispatch(authSlice.actions.onStart());
  await setNewPassword(token, password);
  dispatch(authSlice.actions.onSuccess());
};

export default authSlice.reducer;
