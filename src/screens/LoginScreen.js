import * as Yup from 'yup';

import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from '../components/forms';
import React, { useContext, useState } from 'react';

import AppScreen from '../components/AppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../auth/context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyleSheet } from 'react-native';
import authApi from '../../api/authApi';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  // const [loginFailed, setLoginFailed] = useState(false);

  const { user, setUser } = useContext(AuthContext);

  const [error, setError] = useState();

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login({ email, password });
    if (!result.ok) return setError(result.data.message);

    setError(null);
    setUser(result.data.user);

    // store user in AsyncStorage
    try {
      await AsyncStorage.setItem('user', JSON.stringify(result.data.user));

      // store token in AsyncStorage
      await AsyncStorage.setItem('token', result.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppScreen style={styles.container}>
      {/* <Image style={styles.logo} source={require('../assets/logo-red.png')} /> */}
      <KeyboardAwareScrollView style={styles.formContainer}>
        <Form
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
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

          <SubmitButton title='Login' />
        </Form>
      </KeyboardAwareScrollView>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  formContainer: {
    flex: 1,
    top: 150,
    overflow: 'visible',
  },
});

export default LoginScreen;
