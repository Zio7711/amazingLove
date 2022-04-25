import {
  autoLoginSucceeded,
  loginSucceeded,
  updateUserWithSoulmateSucceeded,
} from "../src/store/globalSlice";

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
