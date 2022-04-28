import { Dimensions, StyleSheet, Text, View } from 'react-native';

import Modal from 'react-native-modal';
import React from 'react';
import TextInput from '../TextInput';
import colors from '../../../config/colors';

const BucketListCardNewModal = ({ isModalVisible, toggleModal }) => {
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
    >
      <View style={styles.container}>
        <TextInput icon='tag' placeholder='Title of your story' />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    // height: 150,
    // width: 300,
    // backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BucketListCardNewModal;
