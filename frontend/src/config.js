export const Config = {
  baseURL: process.env.REACT_APP_BACKEND_URL,
  under_dev: !(process.env.REACT_APP_UNDER_DEV === "false"),
};
