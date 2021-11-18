import get from "lodash/get";
import { APIs, Method } from "../constants";
import { isValid } from "../utils/api";
import api from "./api";
import ERRORS from "../constants/errors";

export const fetchTT = (timeTable) => {
  return api({
    url: APIs.fetchTimeTable,
    method: Method.post,
    body: timeTable,
  })
    .then((response) => {
      if (!isValid(response)) throw new Error(ERRORS.REQUEST_FAILED);
      return get(response, "data.payload.timeTableImg", null);
    })
    .catch(() => Promise.reject(ERRORS.REQUEST_FAILED));
};

export const uploadTT = (timeTable) => {
  return api({
    url: APIs.uploadTimeTable,
    method: Method.post,
    body: timeTable,
  })
    .then((response) => {
      if (!isValid(response)) throw new Error(ERRORS.REQUEST_FAILED);
      return get(response, "data.payload.timeTableImg", null);
    })
    .catch(() => Promise.reject(ERRORS.REQUEST_FAILED));
};
