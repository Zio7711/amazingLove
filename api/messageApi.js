import client from './client';

const messageURL = {
  createMessage: '/message/new',
  getMessageByUser: '/message',
};

const createMessage = (messageInfo) =>
  client.post(messageURL.createMessage, messageInfo);

const getMessageByUser = () => client.get(messageURL.getMessageByUser);

export default { createMessage, getMessageByUser };
