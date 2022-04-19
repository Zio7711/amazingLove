import client from './client';

const login = (userInfo) => client.post('/auth/login', userInfo);

export default {
  login,
};
