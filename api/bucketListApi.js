import {
  bucketListItemUpdated,
  bucketListReceived,
} from "../src/store/bucketListSlice";

// get bucket list by couple id
const getBucketListByCoupleId = (id) => ({
  url: `/bucketList/${id}`,
  method: "get",
  onSuccess: bucketListReceived.type,
});

const updateBucketListItemById = (id, data) => {
  const formData = new FormData();
  formData.append("description", data.description);
  formData.append("coupleId", data.coupleId);
  formData.append("location", data.location);
  formData.append("title", data.title);
  formData.append("date", data.date);
  formData.append("isCompleted", data.isCompleted);

  formData.append("image", {
    uri: data.image,
    type: "image/jpg",
    name: "bucketListImage.jpg",
  });

  return {
    url: `/bucketList/${id}`,
    method: "put",
    data: formData,
    onSuccess: bucketListItemUpdated.type,
  };
};
export default { getBucketListByCoupleId, updateBucketListItemById };
