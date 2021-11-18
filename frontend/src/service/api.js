import axios from "axios";
import { Config } from "../config";
import { Method } from "../constants/index";
import { getAccessToken } from "../utils/storage";
import { handleErrors } from "./errorHandler";

const api = async ({
  url,
  method,
  body = false,
  auth = true,
  contentType = "application/json",
} = {}) => {
  const headers = {};

  if (auth) {
    const { accessToken } = getAccessToken();
    headers.Authorization = `Bearer ${accessToken}`;
    headers["content-type"] = contentType;
  }

  url = Config.baseURL + url;

  if (method === Method.get) {
    return axios[method](url, { headers })
      .then((res) => res)
      .catch((err) => {
        handleErrors(err.response);
        return err.response.data;
      });
  }
  return axios[method](url, body, { headers })
    .then((res) => res)
    .catch((err) => {
      handleErrors(err.response);
      return err.response.data;
    });
};

export default api;
