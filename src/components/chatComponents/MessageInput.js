import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "../forms/Form";
import FormField from "../forms/FormField";
import { apiCallBegan } from "../../store/apiActions";
import messageApi from "../../../api/messageApi";
import { throttle } from "lodash";

const MessageInput = () => {
  // state for store message input
  const [message, setMessage] = useState("");

  // redux hooks for get state and dispatch actions
  const { user } = useSelector((state) => state.global);
  const { couple } = useSelector((state) => state.couple);
  const dispatch = useDispatch();

  // input ref for focus
  const inputRef = useRef(null);

  // send message to server
  const sendMessage = async () => {
    const messageObj = {
      content: message,
      sender: user.id,
      receiver: user.soulmate.id,
      couple: couple.id,
    };

    try {
      // send message
      dispatch(apiCallBegan(messageApi.createMessage(messageObj)));

      // socket.emit("send_messages", action.payload.message);
    } catch (error) {
      console.warn("error sending message: ", error);
    }

    // clear message input
    setMessage("");
  };

  // focus on input
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
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <View style={styles.inputContainer}>
        <SimpleLineIcons
          name="emotsmile"
          size={24}
          color="#595959"
          style={styles.icon}
        />

        <TextInput
          ref={inputRef}
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Signal message..."
        />

        <Feather name="camera" size={24} color="#595959" style={styles.icon} />
        <MaterialCommunityIcons
          name="microphone-outline"
          size={24}
          color="#595959"
          style={styles.icon}
        />
      </View>
      <Pressable
        onPress={throttle(onPress, 2000, { trailing: false })}
        style={styles.buttonContainer}
      >
        {message ? (
          <Ionicons name="send" size={18} color="white" />
        ) : (
          <AntDesign name="plus" size={24} color="white" />
        )}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    padding: 10,
  },
  inputContainer: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#dedede",
    alignItems: "center",
    flexDirection: "row",
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
    backgroundColor: "#3777f0",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 35,
  },
});

export default MessageInput;
