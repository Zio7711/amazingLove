import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import Message from '../components/chatComponents/Message';
import MessageInput from '../components/chatComponents/MessageInput';
import messageApi from '../../api/messageApi';
import useCouple from '../hooks/useCouple';
import useSocket from '../hooks/useSocket';

export default function ChatRoomScreen() {
  const [messages, setMessages] = useState([]);

  const { socket } = useSocket();
  const { couple } = useCouple();

  useEffect(() => {
    // socket join room
    if (couple) {
      socket.emit('join_room', couple._id);
    }
  }, [couple]);

  // get messages from api
  const getMessages = async () => {
    try {
      // const response = await messageApi.getMessageByUser();
      const response = await messageApi.getMessageByCoupleId(couple._id);
      if (!response.ok) return console.warn(response.data.message);

      setMessages(response.data.messages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (couple) getMessages();
  }, [couple]);

  useEffect(() => {
    //set up event listener
    socket.on('receive_messages', (data) => {
      setMessages((messages) => [data, ...messages]);
    });
    return () => {
      socket.removeListener('receive_messages');
    };
  }, [socket]);

  // sort messages according to message.createdAt
  // const sortedMessages = messages?.sort(
  //   (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  // );

  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        keyExtractor={(messages) => messages._id}
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput
        setMessages={setMessages}
        messages={messages}
        socket={socket}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
