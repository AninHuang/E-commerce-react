import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; // Redux logging tool

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// If there's only one middleware
// const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
