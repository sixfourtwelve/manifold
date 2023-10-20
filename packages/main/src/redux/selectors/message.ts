import { ReduxState } from "../../types/redux-state";

export const messageSelector = ({ message }: ReduxState) => {
  return message.message;
};

export const isMessageUpper = ({ message }: ReduxState) =>
  message.message === message.message.toUpperCase();
