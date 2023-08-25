import { all, fork } from "redux-saga/effects";
import "./hello";
import { handleHello } from "./hello";

export default function* root() {
  yield all([fork(handleHello)]);
}
