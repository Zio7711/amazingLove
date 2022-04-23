import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';

import messageApi from '../../../api/messageApi';
import { throttle } from 'lodash';
import useAuth from '../../../auth/useAuth';
import useCouple from '../../hooks/useCouple';

const MessageInput = ({ setMessages, messages, socket }) => {
  const [message, setMessage] = useState('');
  const { user } = useAuth();
  const { couple } = useCouple();

  const inputRef = useRef(null);

  const sendMessage = async () => {
    const messageObj = {
      content: message,
      sender: user._id,
      receiver: user.soulmate._id,
      couple: couple._id,
    };

    try {
      // send message
      const result = await messageApi.createMessage(messageObj);
      if (!result.ok) return console.warn(result.data.message);

      // update messages
      setMessages((messages) => [result.data.message, ...messages]);
      await socket.emit('send_messages', result.data.message);
    } catch (error) {
      console.warn('error sending message: ', error);
    }

    // clear message input
    setMessage('');
  };

  const onPlusClicked = () => {
    inputRef.current.focus();
  };

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
    >
      <View style={styles.inputContainer}>
        <SimpleLineIcons
          name='emotsmile'
          size={24}
          color='#595959'
          style={styles.icon}
        />

        <TextInput
          ref={inputRef}
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder='Signal message...'
        />

        <Feather name='camera' size={24} color='#595959' style={styles.icon} />
        <MaterialCommunityIcons
          name='microphone-outline'
          size={24}
          color='#595959'
          style={styles.icon}
        />
      </View>
      <Pressable
        onPress={throttle(onPress, 2000, { trailing: false })}
        style={styles.buttonContainer}
      >
        {message ? (
          <Ionicons name='send' size={18} color='white' />
        ) : (
          <AntDesign name='plus' size={24} color='white' />
        )}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 10,
  },
  inputContainer: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#dedede',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#3777f0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 35,
  },
});

export default MessageInput;
