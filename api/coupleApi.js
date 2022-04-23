import client from './client';

const getCoupleById = (id) => client.get(`/user/couple/${id}`);

export default { getCoupleById };
