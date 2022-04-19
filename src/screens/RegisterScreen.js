import * as Yup from 'yup';

import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from '../components/forms';
import React, { useContext, useState } from 'react';

import AppScreen from '../components/AppScreen';
import AuthContext from '../../auth/context';
import { StyleSheet } from 'react-native';
import usersApi from '../../api/usersApi';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen() {
  const { user, setUser } = useContext(AuthContext);

  const [error, setError] = useState();

  const handleSubmit = async ({ email, name, password }) => {
    const result = await usersApi.register({ email, name, password });
    if (!result.ok) return setError(result.data.message);

    setError(null);
    setUser(result.data.user);
  };

  return (
    <AppScreen style={styles.container}>
      <Form
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />
        <FormField
          autoCorrect={false}
          icon='account'
          name='name'
          placeholder='Name'
        />
        <FormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          name='email'
          placeholder='Email'
          textContentType='emailAddress'
        />
        <FormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />
        <SubmitButton title='Register' />
      </Form>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
