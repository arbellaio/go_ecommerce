import {applyMiddleware, createStore} from "redux";
import rootReducer from "./index";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger/src";
const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunk,
        loggerMiddleware
    ))