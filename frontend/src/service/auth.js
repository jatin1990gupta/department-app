import { APIs, Method } from "../constants";
import api from "./api";

const studentLogin = (email, password) => {
  return api({
    method: Method.post,
    url: APIs.studentLogin,
    auth: false,
    body: { email, password },
  }).then((resp) => resp.data);
};

export { studentLogin };
