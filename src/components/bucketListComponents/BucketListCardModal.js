import * as ImagePicker from 'expo-image-picker';

import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Form, FormField } from '../forms';
import React, { useEffect } from 'react';

import Button from '../Button';
import ImageInput from './ImageInput';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import SubmitFormTopSection from './SubmitFormTopSection';
import colors from '../../../config/colors';
import { useState } from 'react';

const BucketListCardModal = ({ item, toggleModal, isModalVisible }) => {
  const { title, description, isCompleted, image, location, date } = item;

  // create isOnEdit state
  const [isOnEdit, setIsOnEdit] = useState(!isCompleted);

  const submitBucketListForm = (value) => {
    console.log('value', value);
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

      <Button title='Edit' width={200} onPress={() => setIsOnEdit(true)} />
    </>
  );

  // below is the jsx for list is on Edit
  const listIsOnEdit = (
    <Form
      initialValues={{ title, description, image, location, date }}
      onSubmit={submitBucketListForm}
    >
      <SubmitFormTopSection isModalVisible={isModalVisible} />

      <FormField
        name='title'
        icon='tag'
        placeholder='Please enter the title'
        width={280}
      />
      <FormField
        name='description'
        icon='notebook'
        placeholder='Please enter the description'
        width={280}
      />
      <FormField
        name='location'
        icon='map-marker'
        placeholder='Please enter the location'
        width={280}
      />
      <FormField
        name='date'
        icon='calendar-heart'
        placeholder='Please enter the date'
        width={280}
      />
    </Form>
  );

  return (
    <Modal
      isVisible={isModalVisible}
      swipeDirection='down'
      onSwipeComplete={toggleModal}
      style={styles.modal}
      onBackdropPress={toggleModal}
      //blow is for solve backdrop press flickering
      useNativeDriver
      hideModalContentWhileAnimating
      onModalHide={() => setIsOnEdit(!isCompleted)}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -300}
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
    justifyContent: 'flex-end',
  },
  contentContainer: {
    alignItems: 'center',
  },
  image: {
    margin: 20,
    height: '50%',
    resizeMode: 'contain',
    width: '100%',
  },

  whiteBg: {
    height: Dimensions.get('window').height / 1.8,
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});

export default BucketListCardModal;
