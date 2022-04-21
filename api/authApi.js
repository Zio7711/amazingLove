import client from './client';

const login = (userInfo) => client.post('/auth/login', userInfo);
const autoLogin = () => client.get('/auth/autoLogin');
const updateUser = (userEmail) => client.patch('/auth/updateUser', userEmail);

export default {
  login,
  autoLogin,
  updateUser,
};
