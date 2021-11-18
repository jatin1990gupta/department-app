import get from "lodash/get";
import { clearStorage } from "../utils/storage";
import Notifcation from "../Components/Notification";
import { ERROR_UNAUTHORIZED, BAD_REQUEST } from "../constants";

export const handleErrors = (response) => {
  const { statusCode, message } = get(response, "data", {
    statusCode: 500,
    message: "Oops, something went wrong!",
  });

  switch (statusCode) {
    case ERROR_UNAUTHORIZED:
      clearStorage();
      break;
    case BAD_REQUEST:
      Notifcation("error", "Request failed", message);
      break;
    default:
      Notifcation("error", "Request failed", message);
  }
};
