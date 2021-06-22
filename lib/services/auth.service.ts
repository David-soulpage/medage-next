import { SIGNUP, LOGIN, USER_DETAILS } from "lib/endpoints";
import APIService from "./api.service";

class AuthService extends APIService {
  signUp(data: any): Promise<any> {
    return this.post(SIGNUP, data)
      .then((response: any) => {
        this.setAccessToken(response.data.access);
        this.setRefreshToken(response.data.refresh);
        return response.data;
      })
      .catch((error: any) => {
        throw error.response.data;
      });
  }

  logIn(data: any): Promise<any> {
    return this.post(LOGIN, data)
      .then((response: any) => {
        this.setAccessToken(response.data.access);
        this.setRefreshToken(response.data.refresh);
        return response.data;
      })
      .catch((error: any) => {
        throw error.response.data;
      });
  }

  userDetails(): Promise<any> {
    return this.get(USER_DETAILS)
      .then((response: any) => {
        console.log(response.data, "details");

        return response.data;
      })
      .catch((error: any) => {
        throw error.response.data;
      });
  }
}

export default AuthService;
