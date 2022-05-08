import * as Yup from "yup";

import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Form, FormField } from "../forms";
import { useDispatch, useSelector } from "react-redux";

import Button from "../Button";
import Modal from "react-native-modal";
import React from "react";
import SubmitFormTopSection from "./SubmitFormTopSection";
import { apiCallBegan } from "../../store/apiActions";
import bucketListApi from "../../../api/bucketListApi";
import colors from "../../../config/colors";
import { useState } from "react";
import useToken from "../../hooks/useToken";

const BucketListCardModal = ({ item, toggleModal, isModalVisible }) => {
  // destruction of the props item (bucket list item)
  const { id, title, description, isCompleted, location, date, imageURL } =
    item;
  const { couple } = useSelector((state) => state.couple);
  const dispatch = useDispatch();

  // when fetching data from the server, the field value might be null,
  // so in the validation schema, we need to add custom type Error message
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required()
      .label("Title")
      .typeError("Title is required"),
    description: Yup.string()
      .required()
      .label("Description")
      .typeError("Description is required"),
    location: Yup.string()
      .required()
      .label("Location")
      .typeError("Location is required"),
    date: Yup.date()
      .required()
      .label("Date")
      .typeError("Please enter a valid date"),
    image: Yup.string()
      .required()
      .label("Image")
      .typeError("Image is required"),
  });

  // create isOnEdit state
  const [isOnEdit, setIsOnEdit] = useState(!isCompleted);
  const authToken = useToken();

  const submitBucketListForm = (value, { resetForm }) => {
    const dataToBeSent = { ...value, coupleId: couple.id, isCompleted: true };

    dispatch(
      apiCallBegan(bucketListApi.updateBucketListItemById(id, dataToBeSent))
    );

    // resetForm();
    toggleModal();
  };

  // below is the jsx for list is completed
  // todo: check loading indicator source, currently not working
  const listIsCompleted = (
    <>
      <Image
        source={{
          uri: imageURL,
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }}
        loadingIndicatorSource={{
          uri: "https://picsum.photos/200/300",
          width: 200,
          height: 200,
        }}
        style={styles.image}
      />
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
      initialValues={{ title, description, image: imageURL, location, date }}
      onSubmit={submitBucketListForm}
      validationSchema={validationSchema}
    >
      <SubmitFormTopSection
        id={id}
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />

      <FormField
        name="title"
        icon="tag"
        placeholder="Please enter the title"
        width={280}
      />
      <FormField
        name="description"
        icon="notebook"
        placeholder="Please enter the description"
        width={280}
      />
      <FormField
        name="location"
        icon="map-marker"
        placeholder="Please enter the location"
        width={280}
      />
      <FormField
        name="date"
        icon="calendar-heart"
        placeholder="Please enter the date"
        width={280}
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
        behavior={Platform.OS === "ios" ? "position" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -300}
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
    height: 250,
    resizeMode: "cover",
    width: 250,
  },

  whiteBg: {
    height: Dimensions.get("window").height / 1.8,
    alignItems: "center",
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});

export default BucketListCardModal;
