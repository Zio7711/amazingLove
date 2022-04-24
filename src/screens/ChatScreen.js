import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Message from '../components/chatComponents/Message';
import MessageInput from '../components/chatComponents/MessageInput';
import React from 'react';
import chatRoomData from 'assets/dummy-data/Chats';

export default function ChatRoomScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
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
