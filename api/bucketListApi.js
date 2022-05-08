import {
  bucketListItemAdded,
  bucketListItemDeleted,
  bucketListItemUpdated,
  bucketListReceived,
} from "../src/store/bucketListSlice";

// get bucket list by couple id
const getBucketListByCoupleId = (id) => ({
  url: `/bucketList/${id}`,
  method: "get",
  onSuccess: bucketListReceived.type,
});

const createNewBucketListItem = (data) => ({
  url: "/bucketList/new",
  method: "post",
  data,
  onSuccess: bucketListItemAdded.type,
});

const updateBucketListItemById = (id, data) => {
  const formData = new FormData();
  // loop through the data object
  // if the key is not image , then add it to the formData
  Object.keys(data).forEach((key) => {
    if (key === "image") return;
    formData.append(key, data[key]);
  });

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

const deleteBucketListItemById = (id) => ({
  url: `/bucketList/${id}`,
  method: "delete",
  onSuccess: bucketListItemDeleted.type,
});

export default {
  getBucketListByCoupleId,
  updateBucketListItemById,
  createNewBucketListItem,
  deleteBucketListItemById,
};
