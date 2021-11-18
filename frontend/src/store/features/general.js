import { createSlice } from "@reduxjs/toolkit";
import { STUDENT_TEXT } from "../../constants";

const onChangeUserType = (state, action) => {
  state.userType = action.payload;
};

const onChangeLoginQuoteIndex = (state, action) => {
  state.loginQuoteIndex = action.payload;
};

export const generalSlice = createSlice({
  name: "general",
  initialState: {
    userType: STUDENT_TEXT,
    loginQuoteIndex: 0,
  },
  reducers: {
    onChangeUserType,
    onChangeLoginQuoteIndex,
  },
});

export const changeUserType = (userType) => async (dispatch) => {
  dispatch(generalSlice.actions.onChangeUserType(userType));
};

export const changeLoginQuoteIndex = (index) => async (dispatch) => {
  dispatch(generalSlice.actions.onChangeLoginQuoteIndex(index));
};

export default generalSlice.reducer;
