import * as ImagePicker from "expo-image-picker";

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
import React, { useEffect } from "react";
import { debounce, throttle } from "lodash";

import Button from "../Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import colors from "../../../config/colors";
import { useState } from "react";

const BucketListCardModal = ({ item, toggleModal, isModalVisible }) => {
  const { title, description, isCompleted, image, location, date } = item;
  const [selectedImageUri, setSelectedImageUri] = useState(image);

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

  // handle upload image press for edit
  const selectImage = async () => {
    // try to get image from camera roll
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) setSelectedImageUri(result.uri);
    } catch (error) {
      console.log("error in selectImage");
    }
  };

  // below is the jsx for list is completed
  const listIsCompleted = (
    <>
      <Image source={{ uri: selectedImageUri }} style={styles.image} />
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

        {selectedImageUri ? (
          <TouchableOpacity onPress={selectImage} style={styles.imageOnEdit}>
            <Image
              source={{ uri: selectedImageUri }}
              style={styles.imageOnEdit}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.imageOnEdit}>
            <TouchableOpacity onPress={selectImage}>
              <MaterialCommunityIcons
                name="plus-circle"
                size={60}
                style={styles.icon}
                color={colors.primary}
              />
            </TouchableOpacity>
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
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  // below is for list is on edit
  imageOnEdit: {
    height: "100%",
    width: "50%",
    flex: 1,
    resizeMode: "cover",
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
