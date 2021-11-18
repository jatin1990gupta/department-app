import get from "lodash/get";

export const getAccessToken = () => {
  const userInfo = JSON.parse(
    localStorage.getItem("userInfo") || sessionStorage.getItem("userInfo")
  );

  return get(userInfo, "accessToken", "");
};

export const clearStorage = () => {
  localStorage.clear();
  sessionStorage.clear();
};
