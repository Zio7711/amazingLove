import { bucketListReceived } from "../src/store/bucketListSlice";

// get bucket list by couple id
const getBucketListByCoupleId = (id) => ({
  url: `/bucketList/${id}`,
  method: "get",
  onSuccess: bucketListReceived.type,
});

export default { getBucketListByCoupleId };
