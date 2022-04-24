import { autoLoginSucceeded, loginSucceeded } from "../src/store/globalSlice";

import client from "./client";

const updateUser = (userEmail) => client.patch("/auth/updateUser", userEmail);

const login = (userInfo) => ({
  url: "/auth/login",
  method: "post",
  data: userInfo,
  onSuccess: loginSucceeded.type,
});
const autoLogin = () => ({
  url: "/auth/autoLogin",
  method: "get",
  onSuccess: autoLoginSucceeded.type,
});

export default {
  login,
  autoLogin,
  updateUser,
};
