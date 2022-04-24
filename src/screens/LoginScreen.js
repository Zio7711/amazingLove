import * as Yup from 'yup';

import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from '../components/forms';
import { Keyboard, KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppScreen from '../components/AppScreen';
import { apiCallBegan } from '../store/apiActions';
import authApi from '../../api/authApi';
import authStorage from '../../auth/authStorage';
import useAuth from '../../auth/useAuth';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  // const [loginFailed, setLoginFailed] = useState(false);

  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.global);

  // const { setUser } = useAuth();

  const handleSubmit = async ({ email, password }) => {
    // const result = await authApi.login({ email, password });
    dispatch(apiCallBegan(authApi.login({ email, password })));

    // if (!result.ok) return setError(result.data.message);

    // setError(null);
    // setUser(result.data.user);

    // store user in AsyncStorage
    // try {
    //   await authStorage.storeToken(result.data.token);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <AppScreen style={styles.container} tom={'123'} onPress={Keyboard.dismiss}>
      {/* <Image style={styles.logo} source={require('../assets/logo-red.png')} /> */}
      <KeyboardAvoidingView style={styles.formContainer}>
        <Form
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
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
      </KeyboardAvoidingView>
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
