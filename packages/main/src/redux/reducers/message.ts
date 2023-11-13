import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MessageState } from "../../types/states/message-state";

export const initialState = {
  message: "",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage(state: MessageState, action: PayloadAction<string>) {
      state.message = action.payload;
    },
    upperCaseMessage(state: MessageState) {
      const updated = state.message.toUpperCase();
      state.message = updated;
    },
  },
});

export const { setMessage, upperCaseMessage } = messageSlice.actions;

export default messageSlice.reducer;
