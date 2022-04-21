import * as Yup from 'yup';

import { Form, FormField, SubmitButton } from '../components/forms';
import { StyleSheet, Text, View } from 'react-native';

import AppScreen from '../components/AppScreen';
import React from 'react';
import authApi from '../../api/authApi';
import authStorage from '../../auth/authStorage';
import useAuth from '../../auth/useAuth';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
});

const LinkSoulmateScreen = () => {
  const { setUser } = useAuth();

  const handleSubmit = async (formData) => {
    const result = await authApi.updateUser(formData);
    if (!result.ok) return alert(result.data.message);
    setUser(result.data.user);

    try {
      await authStorage.storeToken(result.data.token);
      const soulmateUser = result.data.soulmateUser;
    } catch (error) {
      console.log(error);
    }
  };

  validationSchema;
  return (
    <AppScreen style={styles.container}>
      <Text>LinkSoulmateScreen</Text>
      <Form
        initialValues={{ email: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          name='email'
          placeholder="Please enter your soulmate's email"
          textContentType='emailAddress'
        />
        <SubmitButton title='Submit' />
      </Form>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LinkSoulmateScreen;
