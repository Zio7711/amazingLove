import { coupleReceived } from "../src/store/coupleSlice";

// get couple by user id api
const getCoupleById = (id) => ({
  url: `/user/couple/${id}`,
  method: "get",
  onSuccess: coupleReceived.type,
});

export default { getCoupleById };
