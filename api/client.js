import authStorage from "../auth/authStorage";
import { create } from "apisauce";

// for dev env zio asus
// const apiClient = create({
//   baseURL: 'http://192.168.0.183:5000/api/v1',
// });

//for dev env Anais mac
const apiClient = create({
  baseURL: "http://10.155.19.5:5000/api/v1",
});

// middleware for adding token to header if there is any
apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;

  // add token to the header
  request.headers["Authorization"] = "Bearer " + authToken;
});
export default apiClient;
