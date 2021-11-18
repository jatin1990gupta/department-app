import get from "lodash/get";
import { APIs, Method } from "../constants";
import ERRORS from "../constants/errors";
import { isValid } from "../utils/api";
import api from "./api";

export const studentLogin = (email, password) => {
  return api({
    method: Method.post,
    url: APIs.studentLogin,
    auth: false,
    body: { email, password },
  })
    .then((response) => {
      if (!isValid(response)) throw new Error(ERRORS.REQUEST_FAILED);
      return get(response, "data.payload", null);
    })
    .catch(() => Promise.reject(ERRORS.REQUEST_FAILED));
};

export const sendResetLink = (email) => {
  return api({
    method: Method.post,
    url: APIs.resetLink,
    auth: false,
    body: { email },
  })
    .then((response) => {
      if (!isValid(response)) throw new Error(ERRORS.REQUEST_FAILED);
      return get(response, "data.payload", null);
    })
    .catch(() => Promise.reject(ERRORS.REQUEST_FAILED));
};

export const setNewPassword = (token, password) => {
  return api({
    method: Method.post,
    url: APIs.setPassword,
    auth: false,
    body: { token, password },
  })
    .then((response) => {
      if (!isValid(response)) throw new Error(ERRORS.REQUEST_FAILED);
    })
    .catch(() => Promise.reject(ERRORS.REQUEST_FAILED));
};
