import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import auth from "./features/auth";
import general from "./features/general";
import { Config } from "../config";

const reducer = { auth, general };

export const middleware = Config.under_dev
  ? getDefaultMiddleware().concat(logger)
  : getDefaultMiddleware();

export default configureStore({
  reducer,
  middleware,
});
