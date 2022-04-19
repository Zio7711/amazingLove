import client from './client';

const userURL = {
  registerUser: '/auth/register',
};

const register = (userInfo) => client.post(userURL.registerUser, userInfo);

export default { register };
