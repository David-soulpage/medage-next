import { BASE } from "./../endpoints";
import axios, { AxiosPromise } from "axios";
// cookie
import cookie from "js-cookie";
// next
import Router from "next/router";

axios.defaults.baseURL = BASE;
axios.interceptors.request.use(
  (config) => {
    const token = cookie.get("accessToken");
    config.headers["Authorization"] = token ? `Bearer ${token}` : "";
    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response: any) => {
    return response;
  },

  (error) => {
    if (error.response.status === 401 && Router.pathname !== "/password_reset/token/[token_id]") {
      Router.push("/accounts/signin");
    }
    return error;
  }
);

abstract class APIService {
  getAxiosHeaders(): any {
    const token = cookie.get("accessToken");
    return {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
    };
  }

  // Setting access token in a cookie
  setAccessToken(token: string): void {
    cookie.set("accessToken", token);
  }

  // Setting refresh token in a cookie
  setRefreshToken(token: string): void {
    cookie.set("refreshToken", token);
  }

  purgeAuth(): void {
    cookie.remove("accessToken");
    cookie.remove("refreshToken");
  }

  // Axios get method
  get(url: string): AxiosPromise<any> {
    return axios({ method: "GET", url });
  }

  post(url: string, data = {}): AxiosPromise<any> {
    return axios({
      method: "POST",
      url,
      data,
    });
  }

  put(url: string, data = {}): AxiosPromise<any> {
    return axios({
      method: "PUT",
      url,
      data,
    });
  }

  delete(url: string): AxiosPromise<any> {
    return axios({
      method: "DELETE",
      url,
    });
  }
}

export default APIService;
