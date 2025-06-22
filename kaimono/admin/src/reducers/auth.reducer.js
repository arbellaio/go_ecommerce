import { POST_LOGIN_USER } from "../constants/constants";

const initialState = {};

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_LOGIN_USER:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default auth;
