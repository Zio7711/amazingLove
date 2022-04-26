import {
  autoLoginSucceeded,
  loginSucceeded,
  updateUserWithSoulmateSucceeded,
} from "../src/store/globalSlice";

// login api takes in user information in login screen form
// after login, user information is stored in redux store
const login = (userInfo) => ({
  url: "/auth/login",
  method: "post",
  data: userInfo,
  onSuccess: loginSucceeded.type,
});

// auto login api in Container, first time loaded
const autoLogin = () => ({
  url: "/auth/autoLogin",
  method: "get",
  onSuccess: autoLoginSucceeded.type,
});

// update user api, currently only used for updating soulmate
const updateUser = (formData) => ({
  url: "/auth/updateUser",
  method: "patch",
  data: formData,
  onSuccess: updateUserWithSoulmateSucceeded.type,
});

export default {
  login,
  autoLogin,
  updateUser,
};
