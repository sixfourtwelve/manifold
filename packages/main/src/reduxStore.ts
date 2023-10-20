import { combineReducers, configureStore } from "@reduxjs/toolkit";
import messageReducer from "./redux/reducers/message";
import createSagaMiddleware from "redux-saga";
import root from "./redux/sagas/root";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  message: messageReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const sagaMiddleware = createSagaMiddleware();
const persistReducers = persistReducer(persistConfig, rootReducers);

const reduxStore = configureStore({
  reducer: persistReducers,
  middleware: [sagaMiddleware, thunk],
});

export const persistor = persistStore(reduxStore);

sagaMiddleware.run(root);

export default reduxStore;
