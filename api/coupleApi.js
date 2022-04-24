import { coupleReceived } from "../src/store/coupleSlice";

const getCoupleById = (id) => ({
  url: `/user/couple/${id}`,
  method: "get",
  onSuccess: coupleReceived.type,
});

export default { getCoupleById };
