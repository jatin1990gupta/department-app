import { createSlice } from "@reduxjs/toolkit";
import { studentLogin } from "../../service/auth";

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

const onError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  // message.error('Invalid Credentials');
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isAuthenticated: false,
    user: {},
    error: null,
  },
  reducers: { onStart, onLogin, onLogout, onError },
});

export const loginStudent =
  (email, password, rememberMe) => async (dispatch) => {
    try {
      dispatch(authSlice.actions.onStart());
      const userdata = await studentLogin(email, password);
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
