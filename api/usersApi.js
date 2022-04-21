import client from './client';

const userURL = {
  registerUser: '/auth/register',
};

const register = (userInfo) => client.post(userURL.registerUser, userInfo);

const getUserById = (id) => client.get(`/user/${id}`);

export default { register, getUserById };
