import { AxiosInstance } from "axios";
import { History, LocationState } from "history";
import Config from "../../config";
import { clearSession } from "../../session.logic";

const setInterceptors = (
  instance: AxiosInstance,
  history: History<LocationState>
) => {
  instance.interceptors.request.use(
    (config) => {
      if (Config.token.length === 0) {
        clearSession();
        history.push({
          pathname: "/",
        });
        return Promise.reject("not logged");
      } else {
        config.headers.authorization = `Bearer ${Config.token}`;
      }

      return config;
    },
    (error) => {
      // Do something with request error

      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      return response;
    },
    (error: any) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx

        if (error.response.status === 401) {
          clearSession();
          history.push({
            pathname: "/",
          });
        }

        return Promise.reject({
          success: false,
          error: error.response.data,
        });
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
        return Promise.reject({
          success: false,
          error: "The request was made but no response was received",
        });
      } else {
        // Something happened in setting up the request that triggered an Error
        return Promise.reject({
          success: false,
          error: error,
        });
      }
    }
  );
};
export default setInterceptors;
