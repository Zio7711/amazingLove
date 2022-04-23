// import authStorage from '../auth/storage';
// import cache from '../utility/cache';
// import { create } from 'apisauce';

// const apiClient = create({
//   baseURL: 'http://localhost:5000/api/v1',
// });

// apiClient.addAsyncRequestTransform(async (request) => {
//   const authToken = await authStorage.getToken();
//   if (!authToken) return;
//   request.headers['x-auth-token'] = authToken;
// });

// const get = apiClient.get;
// apiClient.get = async (url, params, axiosConfig) => {
//   const response = await get(url, params, axiosConfig);

//   if (response.ok) {
//     cache.store(url, response.data);
//     return response;
//   }

//   const data = await cache.get(url);
//   return data ? { ok: true, data } : response;
// };

// export default apiClient;

import authStorage from '../auth/authStorage';
import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.0.183:5000/api/v1',
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  // console.log('Bearer ' + authToken);
  request.headers['Authorization'] = 'Bearer ' + authToken;
});
export default apiClient;