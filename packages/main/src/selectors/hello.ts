import { ReduxState } from "../types/redux-state";

export const helloMessageSelector = ({ hello }: ReduxState) => {
  return hello.message;
};

export const isMessageUpper = ({ hello }: ReduxState) =>
  hello.message === hello.message.toUpperCase();
