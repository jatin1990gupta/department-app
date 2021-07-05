import axios from "axios";
import Config from "../config";
import { Method } from "../constants/index";

const api = async ({
  url,
  method,
  body = false,
  auth = true,
  contentType = "application/json",
} = {}) => {
  const headers = {};

  if (auth) {
    headers["content-type"] = contentType;
  }

  url = Config.baseURL + url;

  if (method === Method.get) {
    return axios[method](url, { headers })
      .then((res) => res)
      .catch((err) => {
        return err.response.data;
      });
  }
  return axios[method](url, body, { headers })
    .then((res) => res)
    .catch((err) => {
      return err.response.data;
    });
};

export default api;
