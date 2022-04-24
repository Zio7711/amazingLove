import client from "./client";
import { messageReceived } from "../src/store/messageSlice";

const messageURL = {
  createMessage: "/message/new",
  getMessageByUser: "/message",
};

const createMessage = (messageInfo) =>
  client.post(messageURL.createMessage, messageInfo);

// const getMessageByCoupleId = (coupleId) => client.get(`/message/${coupleId}`);

const getMessageByCoupleId = (coupleId) => ({
  url: `/message/${coupleId}`,
  method: "get",
  onSuccess: messageReceived.type,
});

export default {
  createMessage,
  getMessageByCoupleId,
};
