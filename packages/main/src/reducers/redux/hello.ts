import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HelloState } from "../../types/hello-types";

export const initialState = {
  message: "",
};

const helloSlice = createSlice({
  name: "hello",
  initialState,
  reducers: {
    setMessage(state: HelloState, action: PayloadAction<string>) {
      state.message = action.payload;
    },
    upperCaseMessage(state: HelloState) {
      state.message = state.message.toUpperCase();
    },
  },
});

export const { setMessage, upperCaseMessage } = helloSlice.actions;

export default helloSlice.reducer;
