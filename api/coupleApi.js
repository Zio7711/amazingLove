import client from "./client";

const getCoupleById = (id) => client.get(`/user/couple/${id}`);

// const getCoupleById = (id) =>({
//     url: `/user/couple/${id}`,
//     method: "get",
//     onSuccess: getCoupleByIdSucceeded.type,
// })

export default { getCoupleById };
