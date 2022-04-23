import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import colors from '../../../config/colors';
import useAuth from '../../../auth/useAuth.js';

const Message = ({ message }) => {
  // get current user id from context
  const { user } = useAuth();

  // check if message is from current user
  const isMe = user._id === message.sender;

  return (
    <View
      style={[
        styles.container,
        isMe ? styles.rightContainer : styles.leftContainer,
      ]}
    >
      <Text style={{ color: colors.white }}>{message.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: '75%',
  },
  leftContainer: {
    backgroundColor: colors.primary,
    marginLeft: 10,
    marginRight: 'auto',
  },
  rightContainer: {
    backgroundColor: colors.secondary,
    marginLeft: 'auto',
    marginRight: 10,
  },
});

export default Message;