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
      message.messages.unshift(action.payload);
    },
  },
});

export const { messageReceived, messageFromSocketReceived } =
  messageSlice.actions;

export default messageSlice.reducer;
