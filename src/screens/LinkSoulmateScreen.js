import * as Yup from "yup";

import { Form, FormField, SubmitButton } from "../components/forms";
import { StyleSheet, Text, View } from "react-native";

import AppScreen from "../components/AppScreen";
import React from "react";
import authApi from "../../api/authApi";
import { useDispatch } from "react-redux";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

const LinkSoulmateScreen = () => {
  dispatch = useDispatch();

  const handleSubmit = async (formData) => {
    // todo: need to test if this dispatch function is ok?
    dispatch(apiCallBegan(authApi.updateUser(formData)));
  };

  return (
    <AppScreen style={styles.container}>
      <Text>LinkSoulmateScreen</Text>
      <Form
        initialValues={{ email: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Please enter your soulmate's email"
          textContentType="emailAddress"
        />
        <SubmitButton title="Submit" />
      </Form>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LinkSoulmateScreen;
