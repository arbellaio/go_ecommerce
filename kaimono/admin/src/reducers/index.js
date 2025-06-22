import { combineReducer } from "redux";
import {auth} from "./auth.reducer";

const rootReducer = new combineReducer({
  auth,
});

export default rootReducer;
