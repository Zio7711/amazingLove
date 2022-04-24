import { autoLoginSucceeded, loginSucceeded } from '../src/store/globalSlice';

import client from './client';

// const login = (userInfo) => client.post('/auth/login', userInfo);
// const autoLogin = () => client.get('/auth/autoLogin');
const updateUser = (userEmail) => client.patch('/auth/updateUser', userEmail);

const login = (userInfo) => ({
  url: '/auth/login',
  method: 'post',
  data: userInfo,
  onSuccess: loginSucceeded.type,
});
const autoLogin = () => ({
  url: '/auth/autoLogin',
  method: 'get',
  onSuccess: autoLoginSucceeded.type,
});

export default {
  login,
  autoLogin,
  updateUser,
};
