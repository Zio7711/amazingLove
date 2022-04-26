import {
  messageReceived,
  messageSentSucceeded,
} from "../src/store/messageSlice";

const messageURL = {
  createMessage: "/message/new",
  getMessageByUser: "/message",
};

// send new message api
const createMessage = (messageInfo) => ({
  url: messageURL.createMessage,
  method: "post",
  data: messageInfo,
  onSuccess: messageSentSucceeded.type,
});

// get message by user id api
const getMessageByCoupleId = (coupleId) => ({
  url: `/message/${coupleId}`,
  method: "get",
  onSuccess: messageReceived.type,
});

export default {
  createMessage,
  getMessageByCoupleId,
};
