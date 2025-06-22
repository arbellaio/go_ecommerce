import axios from "axios";
import { authHeader } from "../util/auth-header";
import { ArbellaOfficeUserToken } from "../constants/constants";

const agent = axios.create();

if (process.env.NODE_ENV === "production") {
  agent.defaults.baseURL = process.env.PRODUCTION_API;
} else {
  agent.defaults.baseURL = process.env.DEVELOPMENT_API;
}

agent.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ArbellaOfficeUserToken);
    if (token) {
      config.headers = authHeader;
    }
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

agent.interceptors.response.use(
  async (res) => {
    return res;
  },
  async (error) => {
    if (error.config.url !== "/login" && error.response) {
      if (error.response.status === 401 && !error.config.retry) {
        error.config.retry = true;
        try {
          const response = await axios.post("/refresh", {
            token: localStorage.getItem("token"),
          });
          const { token } = response.data;
            store.dispatch(token);
          localStorage.setItem("token", token);
          return axios;
        } catch (error) {
          console.error(error);
          return Promise.reject(error);
        }
      }
    }
  }
);

export default agent;
