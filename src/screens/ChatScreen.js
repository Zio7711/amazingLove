import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import Message from '../components/chatComponents/Message';
import MessageInput from '../components/chatComponents/MessageInput';
import messageApi from '../../api/messageApi';

export default function ChatRoomScreen() {
  const [messages, setMessages] = useState(null);

  // get messages from api
  const getMessages = async () => {
    try {
      const response = await messageApi.getMessageByUser();
      if (!response.ok) return console.warn(response.data.message);
      setMessages(response.data.messages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  console.log(messages);

  // sort messages according to message.createdAt
  const sortedMessages = messages?.sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );

  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        keyExtractor={(messages) => messages._id}
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
