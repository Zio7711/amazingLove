import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { Form, FormField } from "../forms";
import { debounce, throttle } from "lodash";

import Button from "../Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import React from "react";
import colors from "../../../config/colors";
import { useState } from "react";

const BucketListCardModal = ({ item, toggleModal, isModalVisible }) => {
  const { title, description, isCompleted, image, location, date } = item;

  // create isOnEdit state
  const [isOnEdit, setIsOnEdit] = useState(!isCompleted);

  const submitBucketListForm = () => {};

  // blow are event handler
  const handleSaveEdit = async () => {
    toggleModal();
  };

  const handleCancelEdit = () => {
    toggleModal();
  };

  // below is the jsx for list is completed
  const listIsCompleted = (
    <>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{date}</Text>
        <Text>{location}</Text>
      </View>

      <Button title="Edit" width={200} onPress={() => setIsOnEdit(true)} />
    </>
  );

  // below is the jsx for list is on Edit

  const listIsOnEdit = (
    <Form
      initialValues={{ title, description, image, location, date }}
      onSubmit={debounce(submitBucketListForm, 1000)}
    >
      <View style={styles.buttonImageContainer}>
        {/* only when modal is open the cancel button is pressable */}
        <TouchableOpacity disabled={!isModalVisible} onPress={handleCancelEdit}>
          <MaterialCommunityIcons
            name="close"
            size={30}
            color={colors.primary}
          />
        </TouchableOpacity>

        {isCompleted ? (
          <Image source={{ uri: image }} style={styles.imageOnEdit} />
        ) : (
          <View style={styles.imageOnEdit}>
            <MaterialCommunityIcons
              name="plus-circle"
              size={60}
              style={styles.icon}
              color={colors.primary}
            />
          </View>
        )}

        {/* only when modal is open the save button is pressable */}
        <TouchableOpacity onPress={handleSaveEdit} disabled={!isModalVisible}>
          <MaterialCommunityIcons
            name="check"
            size={30}
            color={colors.primary}
          />
        </TouchableOpacity>
      </View>
      <FormField name="title" icon="tag" placeholder="Please enter the title" />
      <FormField
        name="description"
        icon="notebook"
        placeholder="Please enter the description"
      />
      <FormField
        name="location"
        icon="map-marker"
        placeholder="Please enter the location"
      />
      <FormField
        name="date"
        icon="calendar-heart"
        placeholder="Please enter the date"
      />
    </Form>
  );

  return (
    <Modal
      isVisible={isModalVisible}
      swipeDirection="down"
      onSwipeComplete={toggleModal}
      style={styles.modal}
      onBackdropPress={toggleModal}
      //blow is for solve backdrop press flickering
      useNativeDriver
      hideModalContentWhileAnimating
      onModalHide={() => setIsOnEdit(!isCompleted)}
    >
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === "ios" ? "position" : "height"}
      >
        <View style={styles.whiteBg}>
          {isOnEdit ? listIsOnEdit : listIsCompleted}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },
  contentContainer: {
    alignItems: "center",
  },
  image: {
    margin: 20,
    height: "50%",
    resizeMode: "contain",
    width: "100%",
  },

  whiteBg: {
    height: Dimensions.get("window").height / 1.8,
    alignItems: "center",
    backgroundColor: colors.white,
  },

  // below is for list is on edit
  imageOnEdit: {
    height: "100%",
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonImageContainer: {
    padding: 10,
    marginTop: 20,
    flexDirection: "row",
    height: "30%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: Dimensions.get("window").width,
  },
});

export default BucketListCardModal;
