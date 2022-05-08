import * as Yup from "yup";

import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import { Form, FormField, SubmitButton } from "../forms";
import { useDispatch, useSelector } from "react-redux";

import Modal from "react-native-modal";
import React from "react";
import { apiCallBegan } from "../../store/apiActions";
import bucketListApi from "../../../api/bucketListApi";
import colors from "../../../config/colors";

const BucketListCardNewModal = ({ isModalVisible, toggleModal }) => {
  const dispatch = useDispatch();
  const { couple } = useSelector((state) => state.couple);
  const submitNewBucketListForm = (value) => {
    const dataToBeSent = { ...value, coupleId: couple.id };
    dispatch(apiCallBegan(bucketListApi.createNewBucketListItem(dataToBeSent)));
    toggleModal();
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required().label("Title"),
  });

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
    >
      <View style={styles.container}>
        <Form
          initialValues={{ title: "" }}
          onSubmit={submitNewBucketListForm}
          validationSchema={validationSchema}
        >
          <FormField
            name="title"
            icon="tag"
            placeholder="Please enter the title"
          />

          <SubmitButton title="Add" />
        </Form>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    height: 150,
    // width: 300,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BucketListCardNewModal;
