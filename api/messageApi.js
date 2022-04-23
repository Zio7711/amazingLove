import client from './client';

const messageURL = {
  createMessage: '/message/new',
  getMessageByUser: '/message',
};

const createMessage = (messageInfo) =>
  client.post(messageURL.createMessage, messageInfo);

// get Message by user not used yet
// const getMessageByUser = () => client.get(messageURL.getMessageByUser);

const getMessageByCoupleId = (coupleId) => client.get(`/message/${coupleId}`);

export default {
  createMessage,
  // getMessageByUser,
  getMessageByCoupleId,
};
