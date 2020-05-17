import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger"; // Redux logging tool

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// If there's only one middleware
// const store = createStore(rootReducer, applyMiddleware(logger));

export const persistor = persistStore(store);
