import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Form from "../forms/Form";
import FormField from "../forms/FormField";
import React from "react";

const BucketListCardOnEdit = ({ item }) => {
  const { title, description, isCompleted, image, location, date } = item;

  const submitBucketListForm = () => {};

  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={200}
    >
      <Form
        initialValues={{ title, description, image, location, date }}
        onSubmit={submitBucketListForm}
      >
        <Image source={{ uri: image }} style={styles.image} />
        <FormField
          name="title"
          icon="tag"
          placeholder="Please enter the title"
        />
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
  },
  image: {
    height: Dimensions.get("window").height / 3,
    resizeMode: "cover",
    width: "100%",
  },
});

export default BucketListCardOnEdit;
