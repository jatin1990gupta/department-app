import get from "lodash/get";
import { RESOURCE_CREATED, SUCCESS_OK } from "../constants";

const checkStatusCode = (response, statusCode) => {
  const status = get(response, "status", null);
  return status && status === statusCode;
};

export const isValid = (response) => {
  return (
    checkStatusCode(response, SUCCESS_OK) ||
    checkStatusCode(response, RESOURCE_CREATED)
  );
};
