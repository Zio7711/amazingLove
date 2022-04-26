import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: [],
  },
  reducers: {
    messageReceived: (message, action) => {
      message.messages = action.payload.messages;
    },

    messageFromSocketReceived: (message, action) => {
      message.messages.unshift(action.payload.message);
    },

    messageSentSucceeded: (message, action) => {
      //update sender's messages state
      message.messages.unshift(action.payload.message);
      // emit to socket after sending a message
      action.payload.socket.emit("send_message", action.payload.message);
    },
  },
});

export const {
  messageReceived,
  messageFromSocketReceived,
  messageSentSucceeded,
} = messageSlice.actions;

export default messageSlice.reducer;
