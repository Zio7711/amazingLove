import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AppScreen from "../components/AppScreen";
import Message from "../components/chatComponents/Message";
import MessageInput from "../components/chatComponents/MessageInput";
import { apiCallBegan } from "../store/apiActions";
import messageApi from "../../api/messageApi";
import { messageFromSocketReceived } from "../store/messageSlice";

export default function ChatRoomScreen() {
  const { socket } = useSelector((state) => state.global);

  const { couple } = useSelector((state) => state.couple);

  const { messages } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    if (couple) {
      // join room with couple id
      socket.emit("join_room", couple.id);

      // get all messages from couple
      dispatch(apiCallBegan(messageApi.getMessageByCoupleId(couple.id)));
    }
  }, [couple]);

  useEffect(() => {
    //set up event listener
    socket.on("receive_messages", (data) => {
      dispatch(messageFromSocketReceived({ message: data }));
    });
    return () => {
      socket.removeListener("receive_messages");
    };
  }, [socket]);

  return (
    <AppScreen style={styles.page}>
      <FlatList
        keyExtractor={(messages) => messages.id}
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
